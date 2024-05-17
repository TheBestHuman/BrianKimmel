---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: default
---

<div>hi</div>
<div id="latest-posts">
  {% assign blog_posts = site.data.blog-posts %}
  {% for post in blog_posts %}
    <div class="post">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>