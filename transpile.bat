@echo off
:: Deletes folders in "scripts"
set folder="scripts"
cd /d %folder%
for /F "delims=" %%i in ('dir /b') do (rmdir "%%i" /s/q || del "%%i" /s/q)
:: Transpiles
npx tsc -watch
