# shave-it

Let you choose and move to trash `node_modules` from selected local repos.

## Motivation

`node_modules` folders usually take up a lot of space on my computer. I made this small CLI tool to help myself decide which folders to remove `node_modules` from.

## Installation

```
$ npm install shave-it -g
```

## Usage

```
$ shave-it ~/Dev
```

`~/Dev` is the directory where I store my dev projects. `shave-it` will ask you to select folders:

```
? Select folders you want to remove node_modules from: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◯ Project 1
 ◯ Project 2
(Move up and down to reveal more choices)
```
