<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-contents">
            <span>© 2021 Vladimir Shefer.</span>
            <a href="https://github.com/vladimirshefer/wishlist" target="_blank">
              GitHub
            </a>
            <a href=" https://gitter.im/wishlist-app/community" target="_blank">
              Gitter
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px; /* Set the fixed height of the footer here */
  line-height: 30px; /* Vertically center the text there */
}

.footer .container{
  border-top: 1px solid #f0f0f0;
}

.footer-contents > * {
  margin-right: 15px;
}
</style>
