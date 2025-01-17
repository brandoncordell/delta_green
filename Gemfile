# frozen_string_literal: true

source 'https://rubygems.org'

ruby "~> #{File.readlines('.tool-versions', mode: 'rb')[1].split[1]}"

gem 'rails', '~> 8.0.1'

gem 'bootsnap', require: false
gem 'jbuilder'
gem 'image_processing', '~> 1.2'
gem 'kamal', require: false
gem 'pg', '~> 1.1'
gem 'propshaft'
gem 'puma', '>= 5.0'
gem 'solid_cable'
gem 'solid_cache'
gem 'solid_queue'
gem 'thruster', require: false

group :development do
  gem 'web-console'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
end

group :development, :test do
  gem 'brakeman', require: false
  gem 'debug', platforms: %i[mri windows], require: 'debug/prelude'
  gem 'rubocop-rails-omakase', require: false
end
