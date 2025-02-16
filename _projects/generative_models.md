---
layout: page
title: Deep Generative Models
description: Research on improving and evaluating generative models, with focus on VAEs, GANs, and autoregressive models
img: assets/img/vae_controllable.png
importance: 2
category: research
---

This project encompasses research on deep generative models, focusing on improving their training dynamics, evaluation metrics, and applications to sequential data.

---

## Information Theory & Generative Models

### Evaluating Lossy Compression Rates of Deep Generative Models
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rd_eval.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
We developed a novel framework for evaluating generative models through the lens of lossy compression, providing a principled way to measure model quality beyond traditional metrics.

[Publication Details](/publications/#pmlr-v119-huang20c){:target="_blank"}

### Better Long-Range Dependency By Bootstrapping A Mutual Information Regularizer
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llm_mi.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
We developed a bootstrapping approach using mutual information regularization to improve the modeling of long-range dependencies in sequential models.

[Publication Details](/publications/#pmlr-v108-cao20a){:target="_blank"}

### Improving GAN Training via Binarized Representation Entropy (BRE)
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/bre_gan.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
A novel regularization approach for GAN training that stabilizes learning by encouraging better capacity allocation in the discriminator through entropy maximization of binary activation patterns.

[Publication Details](/publications/#Cao2018Improving){:target="_blank"}


---

## Sequential Models & VAEs

### On Variational Learning of Controllable Representations for Text without Supervision
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/vae_controllable.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
A framework for learning controllable text representations without explicit supervision, enabling better control over generated content while maintaining naturalness.

[Publication Details](/publications/#pmlr-v119-xu20a){:target="_blank"}

### Preventing Posterior Collapse in Sequence VAEs with Pooling
We introduced a novel pooling mechanism for sequence VAEs that helps prevent the common problem of posterior collapse while maintaining model expressiveness.

[Publication Details](/publications/#long2019preventing){:target="_blank"}

### Variational Hyper RNN for Sequence Modeling
A hierarchical RNN architecture with variational inference that better captures long-range dependencies and hierarchical structure in sequential data.

[Publication Details](/publications/#deng2020variational){:target="_blank"}

---

## Impact

This research has advanced the field of generative modeling by:
- Developing novel evaluation metrics based on information theory
- Creating techniques to prevent common failure modes in VAEs
- Improving the modeling of long-range dependencies
- Enabling better control over generated content
- Providing theoretical insights into model behavior

The methods have been applied to various domains including text generation, sequence modeling, and image generation, contributing to both theoretical understanding and practical applications of deep generative models. 