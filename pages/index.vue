<template>
  <div class="mb-13">
    <div id="header">
      <img class="OLED_header" src="~/assets/img/Laptop_OLED.jpg" />
    </div>

    <vs-row class="mt-15" justify="center" align="center">
      <vs-col w="10" justify="center" align="center">
        <vs-row justify="center" align="center">
          <vs-col w="3"
            ><vs-button gradient size="xl" @click="conditions = true">
              <p>Voir les conditions</p>
            </vs-button></vs-col
          >
          <vs-col w="3">
            <nuxt-link :to="{ path: '/oled' }"
              ><vs-button gradient size="xl">
                <p>Acheter un PC ASUS OLED</p>
              </vs-button></nuxt-link
            ></vs-col
          ></vs-row
        >
      </vs-col>
    </vs-row>
    <vs-row class="mt2 mb-14" justify="center" align="center">
      <vs-col w="6">
        <h2>
          Nous avons pensé à vous, voici une vidéo explicative pour faciliter
          votre remboursement
        </h2>
      </vs-col>
    </vs-row>
    <vs-row class="mt1" justify="center" align="center">
      <vs-col w="6">
        <div class="mx">
          <img
            @click="popupVid1 = true"
            src="~/assets/img/Video 1.jpg"
            class="zoom responsive"
            width="70%"
            alt="Vivobook 13 Slate OLED"
          />
        </div>
      </vs-col>
    </vs-row>
    <vs-row justify="center" class="mt-14" align="center">
      <vs-col w="6" justify="center" align="center">
        <h2 class="mt-15 mb-2">Recherchez votre Processeur</h2>
        <v-autocomplete
          dark
          class="mb-2"
          :items="processors"
          item-color="dark"
          item-text="name"
          label="Processeur"
          v-model="selectedProcessor"
          hide-data
          hide-selected
          item-value="API"
          prepend-icon="mdi-chevron-right"
          return-object
          no-data-text="Pas de données pour votre processeur"
        ></v-autocomplete>
        <div class="mt-14 mb-14" align="start">
          <p>
            L’ordinateur ne doit pas être âgé de plus de 7 ans (date de
            production) et doit répondre aux critères de qualité attendus.
          </p>
        </div>
        <div align="start" v-if="selectedProcessor">
          <p>
            Vous avez sélectionnée un processeur : {{ selectedProcessor.name }},
            vous pouvez donc percevoir entre {{ selectedProcessor.priceB }}€ et
            {{ selectedProcessor.priceA }}€ en fonction de l'état du matériel.
          </p>
        </div>
      </vs-col>
    </vs-row>
    <vs-row class="mt-14 mb-14" justify="center" align="center">
      <vs-col w="6" align="start">
        <h3 class="my-5">
          1 - Enregistrez-vous sur le site asuspromotions.com/oled dans les 15
          jours suivant votre achat.
        </h3>
        <h3 class="my-5">
          2 - Puis renvoyez-nous votre ancien ordinateur dans les 15 jours
        </h3>
        <h3 class="my-5">
          3 -Vous recevrez par virement le montant de votre remboursement + 15€
          de participation aux frais d’envoi de votre ancien PC
        </h3>
      </vs-col>
    </vs-row>
    <!--<vs-row class="mt-14" justify="center" align="center"
      ><vs-col w="6">
        <div class="center">
          <vs-table striped vs-theme="dark">
            <template #thead>
              <vs-tr class="center">
                <vs-th> Processeur </vs-th>
                <vs-th> Prix Maximum </vs-th>
                <vs-th> Prix Minimum </vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr
                :key="i"
                v-for="(processors, i) in $vs.getPage(processors, page, max)"
                :data="processors"
                class="center"
              >
                <vs-td>
                  {{ processors.name }}
                </vs-td>
                <vs-td>
                  {{ processors.priceA }}
                </vs-td>
                <vs-td>
                  {{ processors.priceA }}
                </vs-td>
              </vs-tr>
            </template>
            <template #footer>
              <vs-pagination
                v-model="page"
                :length="$vs.getLength(processors, max)"
              />
            </template>
          </vs-table>
        </div> </vs-col
    ></vs-row>-->

    <vs-dialog width="60%" v-model="popupVid1" not-padding>
      <div class="video-responsive">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/0sjUjl_7nI8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe></div
    ></vs-dialog>

     
    <v-dialog v-model="conditions" width="40%">
      <template v-slot:activator="{ on, attrs }"></template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Use Google's location service?</span>
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.
          Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris
          cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo,
          augue in, duis erat proin condimentum in a eget, sed fermentum sed
          vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor.
          Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi
          ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut
          mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus
          luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla
          aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus
          magna neque pellentesque, nulla vel erat. Justo ex quisque nulla
          accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce
          aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede
          placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet
          viverra scelerisque quis quis et tortor, curabitur morbi a. Enim
          tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent
          nunc. Praesent vestibulum integer maxime felis. Neque aenean quia
          vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer
          libero vestibulum, quis blandit scelerisque mattis fermentum nulla,
          tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo
          phasellus aliquam curabitur metus a, nulla justo mattis duis interdum
          vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo
          sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac
          egestas. Et vitae, nulla gravida erat scelerisque nullam nunc
          pellentesque, a dictumst cras augue, purus imperdiet non. Varius
          montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel
          consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor,
          sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac
          quis. Luctus vulputate aut est sem magna, placerat accumsan nunc
          vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor,
          doloribus varius sem tortor vestibulum mollis, eleifend tortor felis
          tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc
          euismod, tortor porta ridiculus potenti, massa tristique nam magna, et
          wisi placerat et erat ante. Eget pede erat in facilisis, fermentum
          venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus
          malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur
          dui pede purus dolor, integer aenean risus taciti nulla eleifend
          accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a.
          Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum
          consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque
          magna mauris, commodo quisque, praesent semper suscipit lobortis nam.
          Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis
          nunc, montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed
          vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
          integer nec nullam class cursus mi, purus arcu lectus. Vel ante
          suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat,
          lectus morbi lobortis at assumenda. Consequat neque purus ipsum
          voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec
          enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est,
          erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et
          faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum
          vestibulum aenean leo ante ultricies, nam cras quis sed penatibus
          amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum
          ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus
          pretium venenatis. Cras pellentesque vel sodales accumsan aenean.
          Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate
          massa. Consequat ipsum luctus quisque adipiscing libero. Wisi
          sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et,
          aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed
          id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus,
          quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede
          justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed
          etiam hendrerit dapibus, quis metus suspendisse nibh. Fringilla tempor
          felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras
          sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam
          nulla justo egestas venenatis, elementum duis vel porta eros, massa
          vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem
          praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam
          reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed
          ultrices. Amet dignissim justo urna feugiat mauris litora, etiam
          accumsan, lobortis a orci suspendisse. Semper ac mauris, varius
          bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer
          quam, at feugiat egestas duis. Urna ligula ante. Leo elementum
          nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id
          potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor,
          ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
          Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus
          tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam,
          eleifend quis integer curabitur sit scelerisque ac, mauris consequat
          luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus.
          Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer,
          dignissim id pede sodales quis, felis dolorem id mauris orci, orci
          tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent
          placerat tincidunt interdum, ac dignissim metus nonummy hendrerit
          wisi, etiam ut. Semper praesent integer fusce, tortor suspendisse,
          augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed,
          mi vestibulum mus nam, morbi mauris neque vitae aliquam proin
          senectus. Ac amet arcu mollis ante congue elementum, inceptos eget
          optio quam pellentesque quis lobortis, sollicitudin sed vestibulum
          sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At
          tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est
          purus magna augue, non etiam et in wisi id. Non commodo, metus lorem
          facilisi lobortis ac velit, montes neque sed risus consectetuer
          fringilla dolor. Quam justo et integer aliquam, cursus nulla enim
          orci, nam cursus adipiscing, integer torquent non, fringilla per
          maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat
          erat donec ut. Dolor enim erat massa faucibus ultrices in, ante
          ultricies orci lacus, libero consectetuer mauris magna feugiat neque
          dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra
          ligula. Augue curabitur duis dui volutpat, tempus sed ut pede donec.
          Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate
          ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing
          augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi
          placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac
          vivamus amet non aliquam venenatis lectus, sociosqu adipiscing
          consequat nec arcu odio. Blandit orci nec nec, posuere in pretium,
          enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula
          massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet
          non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum
          sem libero iaculis bibendum et eros, eget maecenas non nunc, ad
          pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus
          lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa
          vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
          sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi
          ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam,
          vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
          vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam
          libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
          feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus
          ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut
          vestibulum integer, purus sed lorem pulvinar habitasse turpis. +
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <vs-button gradient @click="conditions = false">FERMER</vs-button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style>
</style>
<script>
// import  from '../components/'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  computed: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
  data() {
    return {
      page: 1,
      max: 10,
      conditions: false,
      selectedProcessor: '',
      popupVid1: false,
      processors: [
        {
          id: '1',
          name: 'Intel(R) Core(TM) i9-12XXX',
          priceA: '1000',
          priceB: '700',
        },
        {
          id: '2',
          name: 'Intel(R) Core(TM) i9-11XXX',
          priceA: '550',
          priceB: '385',
        },
        {
          id: '3',
          name: 'Intel(R) Core(TM) i9-10XXX ',
          priceA: '400',
          priceB: '280',
        },
        {
          id: '4',
          name: 'Intel(R) Core(TM) i9-9XXX',
          priceA: '325',
          priceB: '228',
        },
        {
          id: '5',
          name: 'Intel(R) Core(TM) i9-8XXX',
          priceA: '325',
          priceB: '228',
        },
        {
          id: '6',
          name: 'Intel(R) Core(TM) i7-12XXX',
          priceA: '700',
          priceB: '490',
        },
        {
          id: '7',
          name: 'Intel(R) Core(TM) i7-11XXX',
          priceA: '500',
          priceB: '400',
        },
        {
          id: '8',
          name: 'Intel(R) Core(TM) i7-10XXX',
          priceA: '370',
          priceB: '303',
        },
        {
          id: '9',
          name: 'Intel(R) Core(TM) i7-9XXX',
          priceA: '290',
          priceB: '243',
        },
        {
          id: '10',
          name: 'Intel(R) Core(TM) i7-8XXX',
          priceA: '290',
          priceB: '243',
        },
        {
          id: '11',
          name: 'Intel(R) Core(TM) i7-7XXX',
          priceA: '208',
          priceB: '181',
        },
        {
          id: '12',
          name: 'Intel(R) Core(TM) i7-6XXX',
          priceA: '208',
          priceB: '181',
        },
        {
          id: '13',
          name: 'Intel(R) Core(TM) i7-5XXX',
          priceA: '180',
          priceB: '160',
        },
        {
          id: '14',
          name: 'Intel(R) Core(TM) i7-4XXX',
          priceA: '180',
          priceB: '160',
        },
        {
          id: '15',
          name: 'Intel(R) Core(TM) i5-12XXX',
          priceA: '450',
          priceB: '363',
        },
        {
          id: '16',
          name: 'Intel(R) Core(TM) i5-11XXX',
          priceA: '400',
          priceB: '325',
        },
        {
          id: '17',
          name: 'Intel(R) Core(TM) i5-10XXX',
          priceA: '320',
          priceB: '265',
        },
        {
          id: '18',
          name: 'Intel(R) Core(TM) i5-9XXX',
          priceA: '270',
          priceB: '228',
        },
        {
          id: '19',
          name: 'Intel(R) Core(TM) i5-8XXX',
          priceA: '270',
          priceB: '228',
        },
        {
          id: '20',
          name: 'Intel(R) Core(TM) i5-7XXX',
          priceA: '172',
          priceB: '159',
        },
        {
          id: '21',
          name: 'Intel(R) Core(TM) i5-6XXX',
          priceA: '172',
          priceB: '159',
        },
        {
          id: '22',
          name: 'Intel(R) Core(TM) i5-5XXX',
          priceA: '160',
          priceB: '145',
        },
        {
          id: '23',
          name: 'Intel(R) Core(TM) i5-4XXX',
          priceA: '160',
          priceB: '145',
        },
        {
          id: '24',
          name: 'Intel(R) Core(TM) i3-12XXX',
          priceA: '380',
          priceB: '310',
        },
        {
          id: '25',
          name: 'Intel(R) Core(TM) i3-11XXX',
          priceA: '320',
          priceB: '265',
        },
        {
          id: '26',
          name: 'Intel(R) Core(TM) i3-10XXX',
          priceA: '270',
          priceB: '228',
        },
        {
          id: '27',
          name: 'Intel(R) Core(TM) i3-9XXX',
          priceA: '220',
          priceB: '190',
        },
        {
          id: '28',
          name: 'Intel(R) Core(TM) i3-8XXX',
          priceA: '220',
          priceB: '190',
        },
        {
          id: '29',
          name: 'Intel(R) Core(TM) i3-8XXX',
          priceA: '220',
          priceB: '190',
        },
        {
          id: '30',
          name: 'Intel(R) Core(TM) i3-7XXX',
          priceA: '180',
          priceB: '160',
        },
        {
          id: '31',
          name: 'Intel(R) Core(TM) i3-6XXX',
          priceA: '180',
          priceB: '160',
        },
        {
          id: '32',
          name: 'Intel(R) Core(TM) i3-5XXX',
          priceA: '150',
          priceB: '138',
        },
        {
          id: '33',
          name: 'Intel(R) Core(TM) i3-4XXX',
          priceA: '150',
          priceB: '138',
        },
        { id: '34', name: 'Intel Pentium', priceA: '100', priceB: '70' },
        { id: '35', name: 'Intel Celeron', priceA: '100', priceB: '70' },
        { id: '36', name: 'AMD Ryzen 7', priceA: '250', priceB: '175' },
        { id: '37', name: 'AMD Ryzen 5', priceA: '190', priceB: '133' },
        { id: '38', name: 'AMD Ryzen 3', priceA: '150', priceB: '105' },
        { id: '39', name: 'AMD SERIES A', priceA: '100', priceB: '70' },
        { id: '40', name: 'AMD SERIES FX', priceA: '125', priceB: '88' },
      ],
    }
  },
  components: {},
  created() {},
}
</script>
