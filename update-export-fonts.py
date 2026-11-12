"""После замены шрифтов или fonts.css: python tools/update-export-fonts.py"""
from pathlib import Path
import base64,json,re
root=Path(__file__).resolve().parent.parent
css=(root/'css/fonts.css').read_text(encoding='utf-8')
def embed(m):
    file=(root/'css'/m.group(1).strip('"\"')).resolve()
    return 'url("data:font/woff2;base64,'+base64.b64encode(file.read_bytes()).decode()+'")'
css=re.sub(r'url\(([^)]+)\)',embed,css)
(root/'js/export-fonts.js').write_text('// Автоматически создано tools/update-export-fonts.py\nwindow.PROTOCOL_GUIDE_EXPORT_FONTS='+json.dumps(css,ensure_ascii=False)+';',encoding='utf-8')
print('Шрифты для PNG обновлены')
