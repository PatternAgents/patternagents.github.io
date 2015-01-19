require "rubygems"
require "bundler/setup"
require "stringex"

## -- Misc Configs -- ##

source_dir      = "source"    # source file directory
deploy_dir      = "_deploy"   # deploy directory (for Github pages deployment)
posts_dir       = "_posts"    # directory for blog files
new_post_ext    = "html"      # default new post file extension when using the new_post task


#######################
# Working with Jekyll #
#######################

desc "Generate jekyll site"
task :generate do
  puts "## Generating Site with Jekyll"
  system "compass compile --css-dir #{source_dir}/css"
  system "jekyll build"
end

# usage rake new_project[my-new-post] or rake new_post['my new post'] or rake new_post (defaults to "new-post")
desc "Begin a new project post in #{source_dir}/#{posts_dir}"
task :new_project, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your project: ")
  end
  mkdir_p "#{source_dir}/#{posts_dir}"
  filename = "#{source_dir}/#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  puts "Creating new project: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: project"
    post.puts "category: project"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "permalink: # /projects/something.html = perm url for the post - one we want to publish."
    post.puts "product_slug: # directory in /img/project where assets live"
    post.puts "product_img: # filename of main image for project"
    post.puts "product_id: # ecwid product id (can be blank)"
    post.puts "product_name: # short name for product"
    post.puts "---"
    post.puts "<p>Summary para for #{title.gsub(/&/,'&amp;')} here.</p>"
    post.puts "<!-- more -->"
    post.puts "<p>and the rest of the content</p>"
  end
end

# usage rake new_post[my-new-post] or rake new_post['my new post'] or rake new_post (defaults to "new-post")
desc "Begin a new news post in #{source_dir}/#{posts_dir}"
task :new_post, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your post: ")
  end
  mkdir_p "#{source_dir}/#{posts_dir}"
  filename = "#{source_dir}/#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "category: news"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    post.puts "# blockquote and author"
    post.puts "quote: of making many books there is no end; and much study is a weariness of the flesh."
    post.puts "quote_author: Ecclesiastes"
    post.puts "comments: true"
    post.puts "---"
    post.puts "<p>Content for #{title.gsub(/&/,'&amp;')} here.</p>"
    post.puts "<!-- more -->"
    post.puts "<p>another para below the fold</p>"
  end
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end

desc "list tasks"
task :list do
  puts "Tasks: #{(Rake::Task.tasks - [Rake::Task[:list]]).join(', ')}"
  puts "(type rake -T for more detail)\n\n"
end
