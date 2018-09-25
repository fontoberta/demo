npm install
if [ ! -d boon ]; then
    git clone https://github.com/fontoberta/boon.git
fi
if [ ! -d taktaan ]; then
    git clone https://github.com/fontoberta/taktaan.git
fi
cd boon
mkdir media
mkdir static
source docker-deploy.sh
cd ../taktaan
docker-compose up -d
cd ..
ng build --prod
docker-compose up -d
