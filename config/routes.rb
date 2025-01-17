# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get 'up' => 'rails/health#show', as: :rails_health_check
end
