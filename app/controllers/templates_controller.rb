class TemplatesController < ApplicationController
  
  def index
  end

  def template
    render template: 'templates/' + params[:path], layout: false
  end
  
end
