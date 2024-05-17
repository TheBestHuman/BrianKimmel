---
layout: default
title: "Home"
---

<div>hi</div>

<div id="latest-posts">
  <h2>{{ site.blog_posts_section.title }}</h2>
  {% assign blog_posts = site.data[site.blog_posts_section.data_file] %}
  {% if blog_posts %}
    {% for post in blog_posts %}
      <div class="post">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt }}</p>
      </div>
    {% endfor %}
  {% else %}
    <p>No blog posts found.</p>
  {% endif %}
</div>
