# expressjs-create-placeholder-images
ExpressJS: create placeholder images

## Installation

### Preconditions
Have environment-specific build tools available. Next to that: to take full advantage of node-gd, best is to ensure you install the latest version of libgd2, which can be found at the [libgd github repository](https://github.com/libgd/libgd/releases).

### On Debian/Ubuntu

```bash
$ sudo apt-get install libgd2-dev # libgd
$ npm install node-gd
```

### On RHEL/CentOS

```bash
$ sudo yum install gd-devel
$ npm install node-gd
```

### On Mac OS/X

Using Homebrew

```bash
$ brew install pkg-config gd
$ npm install node-gd
```

...or using MacPorts

```bash
$ sudo port install pkgconfig gd2
$ npm install node-gd
```

### Will not build on Windows
