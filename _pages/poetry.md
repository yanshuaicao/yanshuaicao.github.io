---
layout: page
title: poetry
permalink: /poetry/
description: A collection of my poems.
nav: true
nav_order: 5
display_categories: [love, nature]  # optional, for categorizing poems
horizontal: false
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized poems -->
  {% for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {% assign categorized_poems = site.poetry | where: "category", category %}
  {% assign sorted_poems = categorized_poems | sort: "importance" %}
  <div class="grid">
    {% for poem in sorted_poems %}
      {% include poems.liquid %}
    {% endfor %}
  </div>
  {% endfor %}

{% else %}
<!-- Display poems without categories -->
{% assign sorted_poems = site.poetry | sort: "importance" %}
<div class="grid">
  {% for poem in sorted_poems %}
    {% include poems.liquid %}
  {% endfor %}
</div>
{% endif %}
</div> 