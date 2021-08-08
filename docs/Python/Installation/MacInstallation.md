---
title: Mac Installation
sidebar_position: 1
sidebar_label: Install Python for Mac
---

**Mac OS X comes with Python 2.7 out of the box.**

You do not need to install or configure anything else to use Python 2. These instructions document the installation of Python 3.

The version of Python that ships with OS X is great for learning, but it’s not good for development. The version shipped with OS X may be out of date from the official current Python release, which is considered the stable production version.

## Doing it Right

Let’s install a real version of Python.

Before installing Python, you’ll need to install GCC. GCC can be obtained by downloading Xcode, the smaller Command Line Tools (must have an Apple account) or the even smaller OSX-GCC-Installer package.

:::tip Note
If you already have Xcode installed, do not install OSX-GCC-Installer. In combination, the software can cause issues that are difficult to diagnose.
:::

:::tip Note
If you perform a fresh install of Xcode, you will also need to add the commandline tools by running `xcode-select --install` on the terminal.
:::

While OS X comes with a large number of Unix utilities, those familiar with Linux systems will notice one key component missing: a package manager. Homebrew fills this void.

To install Homebrew, open `Terminal` or your favorite OS X terminal emulator and run


```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

The script will explain what changes it will make and prompt you before the installation begins. Once you’ve installed Homebrew, insert the Homebrew directory at the top of your **PATH** environment variable. You can do this by adding the following line at the bottom of your `~/.profile` file

`export PATH="/usr/local/opt/python/libexec/bin:$PATH"`

If you have OS X 10.12 (Sierra) or older use this line instead

`export PATH=/usr/local/bin:/usr/local/sbin:$PATH`

Now, we can install Python 3:

`$ brew install python`

This will take minute or two.


