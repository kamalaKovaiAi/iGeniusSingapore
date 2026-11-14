<template>
  <section class="block alt" aria-labelledby="contact-title" id="contact">
    <div class="container">
      <div class="section-head">
        <h2 id="contact-title">Get in touch</h2>
        <p>Have a project in mind? Reach out and let's discuss how we can help.</p>
      </div>

      <div class="contact-grid">
        <div class="contact-item">
          <h3>Email</h3>
          <a href="mailto:info@igeniusai.com">info@igeniusai.com</a>
        </div>
        <div class="contact-item">
          <h3>Phone</h3>
          <a href="tel:+14157999321">+1 415 799 9321</a>
        </div>
        <div class="contact-item">
          <h3>Office</h3>
          <p>iGenius Singapore<br>Technology &amp; Cloud Operations</p>
        </div>
      </div>

      <div class="cta-band" style="margin-top:2.5rem">
        <div>
          <h2>Partner with us to build a resilient business</h2>
          <p>Our dedicated teams work 24 x 7, 365 days a year, so your services stay up all the time.</p>
        </div>
        <div class="btn-row">
          <a class="btn btn-primary" href="mailto:info@igeniusai.com">Get in touch</a>
        </div>
      </div>

      <div class="newsletter" style="margin-top:2.5rem">
        <h3 style="margin:0 0 .4rem;color:var(--navy)">Subscribe to our newsletter</h3>
        <p style="margin:0 0 1rem;color:var(--muted)">Stay informed about our latest updates by email.</p>
        <form @submit.prevent>
          <label for="sub-email" class="sr-only" style="position:absolute;left:-9999px">Email address</label>
          <input id="sub-email" type="email" name="email" placeholder="Your email address" autocomplete="email" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
</template>
