# sc-modelng1

Base of this is: https://github.com/angular/angular-seed

**Q1) How to test that modelng1 is working?**

1. Make sure you have the latest code from sc-modelng1 repo.
   1. cd /gt/sc-prog-repos/sc-modelng1/scripts
   2. Step 2 and 3 are not needed if the node_modules already has the correct modules
      make sure node_modules folder only has README.md and not any node modules.
      root@b353f889b7e4:/gt/sc-prog-repos/sc-modelng1/scripts# ls node_modules/
      We are doing this since if one of the node module is wrong version then it will create problems.
   3. root@b353f889b7e4:/gt/sc-prog-repos/sc-modelng1/scripts# npm install    -> this will download almost 400MB of node modules
   4. root@b353f889b7e4:/gt/sc-prog-repos/sc-modelng1/scripts# npm start
5. In browser open http://127.0.0.1:8000/index.html

**Q2) How to create your own app from modelng2?**

1. Create a new repo on git lab
2. Checkout the newly created repo
   git clone https://gitlab.com/savantcare/sc-brain-app.git
   or
   git submodule add https://gitlab.com/savantcare/sc-brain-app.git
3. Copy modelng1 into that repo
   vk@Vikass-Air ~/d/sc-repos> cd sc-brain-app/
   cp ../sc-modelng1/.gitignore .
   cp ../sc-modelng1/Dockerfile .
   cp ../sc-modelng1/README.md .
   cp -rf ../sc-modelng1/docker-compose.yml .
   cp -rf ../sc-modelng1/etc-supervisor-conf.d-services.conf .
   cp -rf ../sc-modelng1/scripts .

4. Make sure sc-brain-app is committed into git 
   git add 
   git commit 

5. Go to the web interface of gitlab and make sure sc-brain-app has the code that you commited.

6. A. Step 2 and 3 are not needed if the node_modules already has the correct modules
      make sure node_modules folder only has README.md and not any node modules.
      root@b353f889b7e4:/gt/sc-prog-repos/sc-modelng2/scripts# ls node_modules/
      We are doing this since if one of the node module is wrong version then it will create problems.
   B. root@b353f889b7e4:/gt/sc-prog-repos/sc-modelng2/scripts# npm install    -> this will download almost 400MB of node modules
   C. root@b353f889b7e4:/gt/sc-prog-repos/sc-modelng2/scripts# npm start

7. In browser open http://127.0.0.1:8000/index.html

