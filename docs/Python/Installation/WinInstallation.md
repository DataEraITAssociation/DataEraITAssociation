---
title: Windows Installation
sidebar_position: 2
sidebar_label: Install Python for Windows
---

# Introduction

> Python is a widely used high-level programming language first launched in 1991. Since then, Python has been gaining popularity and is considered as one of the most popular and flexible server-side programming languages.

## Prerequisites

* A system running Windows 10 with admin privileges
* Command Prompt (comes with Windows by default)
* A Remote Desktop Connection app (use if you are installing Python on a remote Windows server)

---

## Step 1: Select Version of Python to Install

The installation procedure involves downloading the official Python .exe installer and running it on your system.

The version you need depends on what you want to do in Python. For example, if you are working on a project coded in Python version 2.6, you probably need that version. If you are starting a project from scratch, you have the freedom to choose.

If you are learning to code in Python
 ** we recommend you download both the latest version of Python 2 and 3. Working with Python 2 enables you to work on older projects or test new projects for backward compatibility. **

:::tip Tip

** Note: ** If you are installing Python on a remote Windows server, log in via Remote Desktop Protocol (RDP). Once you log in, the installation procedure is the same as for a local Windows machine.  

:::  

---



## Step 2: Download Python Executable Installer

1. Open your web browser and navigate to the <a href="https://www.python.org/downloads/windows/">Downloads for Windows section</a> of the <a href="https://www.python.org/">Offical Python website</a>

2. Search for your desired version of Python. Download the latest version

3. Select a link to download either the Windows x86-64 executable installer or Windows x86 executable installer. The download is approximately 25MB.&nbsp;

:::tip Note

**Note:** If your Windows installation is a 32-bit system, you need the ** Windows x86 executable installer ** . If your Windows is a 64-bit version, you need to download the ** Windows x86-64 executable installer ** . There is nothing to worry about if you install the “wrong” version. You can uninstall one version of Python and install another.

:::

---

## Step 3: Run Executable Installer

1. Run the Python Installer once downloaded. (In this example, we have downloaded Python 3.7.3.)

2. Make sure you select the Install launcher for all users and Add Python 3.7 to PATH checkboxes. The latter places the interpreter in the execution path. For older versions of Python that do not support the Add Python to Path checkbox, see Step 6.

3. Select Install Now – the recommended installation options.


:::tip Note
For all recent versions of Python, the recommended installation options include Pip and IDLE. Older versions might not include such additional features.
:::

4. The next dialog will prompt you to select whether to Disable path length limit. Choosing this option will allow Python to bypass the 260-character MAX_PATH limit. Effectively, it will enable Python to use long path names. The **Disable path length limit** option will not affect any other system settings. Turning it on will resolve potential name length issues that may arise with Python projects developed in Linux.
