# sellout

    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

Easily sell out and put your packages on the other package managers that aren't
[npm](https://www.npmjs.org/): [bower](http://bower.io/) and [component](http://component.io/).

## install

    npm install -g sellout

## use

    sellout

No options or arguments. Expects a `package.json` file in your repo, from
which it will derive and update `component.json` and `bower.json` files.

## see also

[tin](https://github.com/jprichardson/tin) lets you manage these files too,
and mostly replaces using `npm` as a binary and so on. It doesn't sync.
All this does is sync, and it only syncs one way: if you don't use
`npm` as your canonical source, this is not the module for you.
