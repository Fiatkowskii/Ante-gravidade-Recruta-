@echo off
echo ==========================================
echo      INICIANDO O SITE RECRUTA+
echo ==========================================
echo.
echo Por favor, aguarde enquanto iniciamos o servidor...
echo O navegador abrirá automaticamente em alguns segundos.
echo.
echo NAO FECHE ESTA JANELA PRETA enquanto estiver usando o site.
echo.

cd /d "%~dp0"
start "" "http://localhost:5173"
call npm run dev
pause
