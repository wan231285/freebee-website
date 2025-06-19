@echo off
echo FREEBEE COIN 웹사이트 S3에 자동 업로드 시작...

aws s3 sync . s3://freebeeeco.com --delete

echo --------------------------
echo ✅ 배포 완료!
pause
