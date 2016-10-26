# Lasso generated output issue

```sh
$ git clone git@github.com:schetnikovich/lasso-generated-output-issue.git 
$ npm install
```

Run in production mode:

```sh
$ NODE_ENV=production node src/server.js
```

Build in production mode:

```sh
$ NODE_ENV=production node src/build.j
```

### Check output:

Two files for `index` page are generated at `./build/static` folder. One by `lasso.lassoPage()` and another
at runtime by visiting `http://localhost:8080`.

Here is an output of `$ diff index-0b15d8aa.js index-affa7adf.js`:

```diff
2,3c2,3
< $_mod.def("/lasso-generated-output-issue$1.0.0/src/pages/index/image1.jpg",{width:500,height:500,url:"/static/image1-1c6d514a.jpg"});
< $_mod.def("/lasso-generated-output-issue$1.0.0/src/pages/index/image2.jpg",{width:500,height:500,url:"/static/image2-1b9c5dd7.jpg"});
\ No newline at end of file
---
> $_mod.def("/lasso-generated-output-issue$1.0.0/src/pages/index/image2.jpg",{width:500,height:500,url:"/static/image2-1b9c5dd7.jpg"});
> $_mod.def("/lasso-generated-output-issue$1.0.0/src/pages/index/image1.jpg",{width:500,height:500,url:"/static/image1-1c6d514a.jpg"});
\ No newline at end of file
```

Files differ only by order of lines.
