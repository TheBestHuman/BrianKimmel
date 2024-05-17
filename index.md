---
layout: default
title: "Home"
---

# Welcome to My CV

Hi, my name's Brett and I'm a senior network system administrator. As well as administrating systems I also have experience making software and web apps. I have worked at a number of companies gaining teamwork and leadership skills.

{% for section in site.config.content %}
## {{ section.title }}

{% if section.title == "Blog Posts" %}
<div id="latest-posts">
  {% assign blog_posts = site.data['blog-posts'] %}
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
{% else %}
{% if section.layout == "list" %}
{% for item in section.content %}
<div class="post">
  <h2><a href="{{ item.link }}">{{ item.title }}</a></h2>
  {% if item.sub_title %}
  <p><strong>{{ item.sub_title }}</strong></p>
  {% endif %}
  {% if item.caption %}
  <p>{{ item.caption }}</p>
  {% endif %}
  <p>{{ item.description }}</p>
  {% if item.additional_links %}
  <p>Additional links:</p>
  <ul>
    {% for link in item.additional_links %}
    <li><a href="{{ link.url }}"><i class="{{ link.icon }}"></i> {{ link.title }}</a></li>
    {% endfor %}
  </ul>
  {% endif %}
  {% if item.quote %}
  <blockquote>{{ item.quote }}</blockquote>
  {% endif %}
</div>
{% endfor %}
{% endif %}
{% endif %}
{% endfor %}
