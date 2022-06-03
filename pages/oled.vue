<template>
  <div>
    <!-- GRID D'ACHAT LAPTOP OLED-->
    <vs-row class="mt2" justify="center" align="center"
      ><vs-col w="6" justify="center" align="center"
        ><h1>Découvrez la sélection OLED éligible</h1></vs-col
      >
    </vs-row>
    <vs-row justify="center" align="center">
      <vs-col w="6" justify="center" align="center">
        <vs-row justify="center" align="center">
          <vs-col w="4">
            <a @click="CTA1 = true">
              <div class="OLED_card">
                <img class="img_OLED_PC up" src="~/assets/img/OLED/UX325.png" />
                <p>Zenbook 13 OLED (UX325)</p>
                <vs-button
                  @click="CTA1 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
          <vs-col w="4">
            <a @click="CTA2 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/UX363.png"
                  alt=""
                  srcset=""
                />
                <p>Zenbook Flip 13 OLED (UX363)</p>
                <vs-button
                  @click="CTA2 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
          <vs-col w="4">
            <a @click="CTA3 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/S513.png"
                  alt=""
                  srcset=""
                />
                <p>Vivobook 13 OLED (S533)</p>
                <vs-button
                  @click="CTA3 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row class="mt" justify="center" align="center">
      <vs-col w="6" justify="center" align="center">
        <vs-row>
          <vs-col w="4">
            <a @click="CTA4 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/UX482.png"
                  alt=""
                  srcset=""
                />
                <p>Zenbook Pro Duo OLED (UX482)</p>
                <vs-button
                  @click="CTA4 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
          <vs-col w="4">
            <a @click="CTA5 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/T3300.png"
                  alt=""
                  srcset=""
                />
                <p>Vivobook 13 Slate OLED (T3300)</p>
                <vs-button
                  @click="CTA5 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
          <vs-col w="4">
            <a @click="CTA6 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/S3400.png"
                  alt=""
                  srcset=""
                />
                <p>Vivobook Pro 14 OLED (S3400)</p>
                <vs-button
                  @click="CTA6 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
    <!-- DIALOG CTA ACHAT -->
    <vs-dialog blur width="550px" not-center v-model="CTA1">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Zenbook 13 OLED (UX325)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA1 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA2">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Zenbook Flip 13 OLED (UX363)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA2 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA3">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Vivobook 13 OLED (S533)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA3 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA4">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Zenbook Pro Duo OLED (UX482)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA4 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA5">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Vivobook 13 Slate OLED (T3300)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA5 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA6">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Vivobook Pro 14 OLED (S3400)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA6 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <!-- END DIALOG CTA ACHAT -->
  </div>
</template>
<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      CTA1: false,
      CTA2: false,
      CTA3: false,
      CTA4: false,
      CTA5: false,
      CTA6: false,
    }
  },
}
</script>








    