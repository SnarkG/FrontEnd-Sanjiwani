#!/bin/bash
echo "Exceuting deploy.prod.sh for sanjiwani_front"
echo "Preparing for deploy Sanjiwani_backend BACKEND to api.codolyte.com"
ssh instance-2.us-central1-a.learned-mind-281610  << 'ENDSSH'
cd ~/apecto
echo "directory changed......"
sudo rm -Rv sanjiwaniuser
git clone git@gitlab.com:codolyte/sanjiwaniuser.git
echo "cloning staered from git repository......."
cd sanjiwaniuser
echo "directory changed......"
ls -ls
npm install
npm run build
sudo mv -R ~/apecto/sanjiwaniuser/build/* /var/www/sanjiwaniuser/
sudo service nginx restart
sudo service nginx status
exit
ENDSSH
