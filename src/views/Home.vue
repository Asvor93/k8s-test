<template>
  <div class="card">
    <div class="card-body text-center">
      <h4>Welcome to the cat facts page</h4>
      <span>
        Use the nav menu above to find new facts
      </span>
    </div>
  </div>
  <div style="align-self:center">
  <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel" style="width:60%; margin-left:20%;">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_960_720.jpg" class="d-block w-100" alt="https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_960_720.jpg">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="text-black">First slide label</h5>
          <p class="text-black">The world's largest cat measured 48.5 inches long.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_960_720.jpg" class="d-block w-100" alt="https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519_960_720.jpg">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="text-black">Second slide label</h5>
          <p class="text-black">Every year, nearly four million cats are eaten in China as a delicacy.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_960_720.jpg" class="d-block w-100" alt="https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_960_720.jpg">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="text-black">Third slide label</h5>
          <p class="text-black">The technical term for a cat’s hairball is a bezoar.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
</template>
