<template lang="pug">
section.team
  .container
    h2.title Executive Team
    p.description Our partner, Blockchain Developer Asia, has more than 200 developers
      br
      | working around the clock to bring our platform, and others like it, to life.
    .members
      .member(v-for="i, k in members" :key="k")
        .preview
          .position(v-text="i.position")
          .avatar(v-image="i.image")
          .name(v-text="i.name")
          .bio(v-text="i.bio")
        .links
          .external
            a(v-if="i.other" :href="i.other.link" target="_blank" rel="noopener" :title="i.other.name")
              img.logo(
                v-image="i.other.image"
                :alt="i.other.name"
                :width="i.other.width")
          a.phone(v-if="i.phone" :href="`tel:${i.phone}`" target="_blank" rel="noopener" v-tooltip="i.phone")
            smartphone-icon(size="24" stroke-width="1")
          a.email(v-if="i.email" :href="`mailto:${i.email}`" target="_blank" rel="noopener" title="Email")
            mail-icon(size="24" stroke-width="1")
          a.facebook(v-if="i.facebook" :href="i.facebook" target="_blank" rel="noopener" title="Facebook")
            facebook-icon(size="24" stroke-width="1")
          a.linkedin(v-if="i.linkedin" :href="i.linkedin" target="_blank" rel="noopener" title="Linkedin")
            linkedin-icon(size="24" stroke-width="1")
</template>

<script>
import {
  MailIcon,
  FacebookIcon,
  LinkedinIcon,
  SmartphoneIcon
} from 'vue-feather-icons'

import { TEAM_MEMBERS } from '~/settings'

export default {
  components: {
    MailIcon,
    FacebookIcon,
    LinkedinIcon,
    SmartphoneIcon
  },

  computed: {
    members: () => TEAM_MEMBERS
  }
}
</script>

<style lang="scss" scoped>
section.team {
  text-align: center;
  padding: 6em 0;
  @include media(sm-down) {
    padding: 2em 0;
    margin-top: $--gap-home-section;
  }
  .members {
    margin-top: 3em;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    .member {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-size: 14px;
      text-align: center;
      background: lighten(#191C25, 1);
      .preview {
        padding: 1.5rem;
        flex: 1;
        .avatar {
          margin: 1.5em auto 0 auto;
          width: 180px;
          height: 180px;
          background-size: cover;
          background-color: $--color-background-page;
          border-radius: 1000px;
          filter: grayscale(1);
        }
        .position {
          text-align: left;
          font-weight: bold;
        }
        .name {
          color: white;
          font-size: 16px;
          margin-top: 2em;
          text-transform: uppercase;
          font-family: $--font-family-heading;
        }
        .bio {
          margin-top: .5em;
        }
      }
      .links {
        display: flex;
        > * {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .external {
          flex: 1;
          img {
            // max-height: 2em;
            max-width: 100%;
            opacity: .8;
            transition: .3s ease-in-out;
          }
          &:hover {
            img {
              opacity: 1;
            }
          }
        }
        > a {
          color: white;
          flex: 0 64px;
          background: #13171F;
          margin-left: 1px;
          height: 64px;
          color: white;
          &:hover {
            color: $--color-primary;
          }
        }
      }
    }
  }
}
</style>
