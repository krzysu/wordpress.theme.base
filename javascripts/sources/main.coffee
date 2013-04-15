unless window.ThemeName?
  window.ThemeName = {}

$ ->
  new MainController()

class MainController
  constructor: ->
    new ThemeName.Example()
