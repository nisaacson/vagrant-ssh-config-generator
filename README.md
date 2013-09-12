# vagrant ssh config generator

Create an ssh config to allow ssh access to vagrant boxes.

[![Build Status](https://travis-ci.org/nisaacson/vagrant-ssh-config-generator.png?branch=master)](https://travis-ci.org/nisaacson/vagrant-ssh-config-generator)

[![NPM](https://nodei.co/npm/vagrant-ssh-config-generator.png)](https://nodei.co/npm/vagrant-ssh-config-generator/)

## Usage


The command `vagrant-ssh-config-generator` outputs a string that looks like

```bash
Host *.vagrant.dev
  User vagrant
  UserKnownHostsFile /dev/null
  StrictHostKeyChecking no
  PasswordAuthentication no
  IdentityFile "/HOME_DIRECTORY_HERE/.vagrant.d/insecure_private_key"
  IdentitiesOnly yes
  LogLevel FATAL
```

To add this to your ssh config file, execute

```bash
vagrant-ssh-config-generator >> ~/.ssh/config
```

Note that in the example above, `HOME_DIRECTORY_HERE` will be replaced with your actual home directory

## Test

```bash
# install development dependcies
npm install
# run the tests
npm test
```

