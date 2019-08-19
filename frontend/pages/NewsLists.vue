<template>
  <div class="content">
    <p>Today</p>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-20">
        <md-card>
          <md-card-media>
            <img src="https://img.icons8.com/small/200/000000/image.png" alt="People" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">Title News</div>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-20">
        <md-card>
          <md-card-media>
            <img src="https://img.icons8.com/small/200/000000/image.png" alt="People" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">Title News</div>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-20">
        <md-card>
          <md-card-media>
            <img src="https://img.icons8.com/small/200/000000/image.png" alt="People" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">Title News</div>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-20">
        <md-card>
          <md-card-media>
            <img src="https://img.icons8.com/small/200/000000/image.png" alt="People" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">Title News</div>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-20">
        <md-card>
          <md-card-media>
            <img src="https://img.icons8.com/small/200/000000/image.png" alt="People" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">Title News</div>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
//   width: 320px;
//   margin: 4px;
  display: inline-block;
  vertical-align: top;
  .md-card-header {
    background-color: transparent;
    box-shadow: none;
  }
}

.md-card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;

      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .md-icon {
      margin: 8px;
    }
  }

  .md-button-group {
    display: flex;

    .md-button {
      min-width: 60px;
      border-radius: 2px;
    }
  }
}
</style>
