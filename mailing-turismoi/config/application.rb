require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MailingTurismoi
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Email configuration
    config.action_mailer.delivery_method = :smtp
    config.action_mailer.default :charset => "utf-8"
    config.action_mailer.smtp_settings = {
      address: "smtp.gmail.com",
      port: 587,
      domain: "gmail.com",
      authentication: :plain,
      user_name: "cmactestica@gmail.com",
      password: "abcDEF123*",
      enable_starttls_auto: true,
    }
  end
end
