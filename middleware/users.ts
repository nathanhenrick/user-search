import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app"

export default defineNuxtRouteMiddleware ((to, from) => {
  const paramValue = +to.params.id
  if(isNaN(paramValue) || paramValue < 0 || paramValue > 10) {
    return navigateTo("/")
  }
})