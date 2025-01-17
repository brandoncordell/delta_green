# frozen_string_literal: true

require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test 'can reach home page' do
    get root_path
    assert_response :success
  end
end
