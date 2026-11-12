"""Собирает автономный ../index.html из редактируемой папки source."""
from pathlib import Path
import re,base64
root=Path(__file__).resolve().parent.parent
html=(root/'index.html').read_text(encoding='utf-8')
scripts=[]
def script(m):
 scripts.append((root/m.group(1)).read_text(encoding='utf-8'))
 return ''
html=re.sub(r'<script src="([^"]+)" defer></script>',script,html)
def style(m):
 file=root/m.group(1)
 css=file.read_text(encoding='utf-8')
 def font(x):
  target=(file.parent/x.group(1).strip('"\'')).resolve()
  return 'url(data:font/woff2;base64,'+base64.b64encode(target.read_bytes()).decode()+')'
 css=re.sub(r'url\(([^)]+\.woff2)\)',font,css)
 return '<style>'+css+'</style>'
html=re.sub(r'<link rel="stylesheet" href="([^"]+)">',style,html)
html=html.replace('<div id="app"></div>','<div id="app"><p style="padding:24px;font:18px sans-serif;color:#0032a0">Загрузка Protocol Guide…</p></div>')
inline='\n'.join('<script>'+s.replace('</script','<\\/script')+'</script>' for s in scripts)
html=html.replace('</body>',inline+'\n</body>')
out=root.parent/'index.html'
out.write_text(html,encoding='utf-8')
print(out)
