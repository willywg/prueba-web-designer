class UserMailer < ApplicationMailer
  default from: 'deibytb@outlook.com'

  def frequent_user(user)
    mail(to: user.email, subject: 'Recomienda y gana con turismoi')
  end
end
