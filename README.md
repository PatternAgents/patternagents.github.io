PatternAgents WebSite
=====================
Updated : 6/17/2021

To build: run 'compass compile' or 'compass watch' from top directory to build the css. Run 'jekyll' from top directory to build everything into 'site'.

To run locally: we are not yet relying on .htaccess file, so you don't need local apache to run. This is sufficient: 'jekyll --server' from top directory and then the site is at http://localhost:4000/  

I run apache locally with  virtual host. To do this add
      # patternAgents local development
      127.0.0.1 local.patternagents.com
to /etc/hosts, and
      <VirtualHost *:80>
      DocumentRoot "/whatever/your/path/pacomsite/site
      ServerName local.patternagents.com
      </VirtualHost>
to /etc/apache2/extra/httpd-vhosts.conf, and restart your local apache. Then the local url is http://local.patternagents.com/

Changing things: css changes mostly will be in sass/\_site.scss. Template changes mostly in source/\_includes/layouts. Content changes in source/*

Installing dependencies:
      gem install bundler # if you don't have it already
      bunder update # from patternagents root

Brief tour of the files:
*  \_plugins - bit of ruby for better pagination. Borrowed from octopress
*  design - site design reference files
*  sass - sass compiles into source/css
*  sass/lib - sass that is not specific to this site, could be used as-is elsewhere
*  site - generated web site
*  source - stuff that is run through jekyll to produce site
    *  \_includes - stuff that is included in templates
    *  \_includes/frag - bits of reusable stuff. \_includes/frag/js has the reusable js
    *  \_includes/layouts - Actual 'template partials' layouts. content.html & post.html are obsolete
    *  \_layouts - layouts. We will only use basic.html. - may need custom one for posts?
    *  \_posts - create new blog post by adding file here
    *  css - css generated from sass (derived files)
    *  img - image files
    *  js - javascript files
    *  type - fontface type files
    *  news/index.html - list of all blog posts (buggy right now...)
    *  index.html - index page
    *  policies, support - other html
*  \_config.yml - jekyll config file. Things defined in here will show up as {{site._whatever_}}. One useful thing in here is all the urls
*  config.rb - sass config file
*  Rakefile - ruby commands. `rake list` to list them
*  README.md - this file.
*  todo.txt - todo list (currently out of date)

**template partials:** Standard jekyll gives you one {{content}} block only, which is pretty limiting. We are getting around this by structuring things like so: typical template (e.g. source/index.html) uses source/\_layouts/basic.html layout, which is really basic:
\<body\>{{content}}\</body\>. The real layout happens in source/\_includes/layouts/index.html which expects to have several {{index\_*whatever*}} defined. So source/index.html uses {% capture %}...{% endcapture %} blocks to define the index\_*whatever*, and then includes source/\_includes/layouts/home.html which marshals them all, creating the {{content}} for the final layout.
