<template>
  <div class="container mx-auto">
    <app-header></app-header>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg">
            <router-view />
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
import Link from "../components/AppLink.vue";
import Nav from '../components/Nav.vue'
import AppHeader from "../components/AppHeader.vue";

export default {
  components: { AppHeader, Link, Nav }
}
</script>
