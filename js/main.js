const about = document.querySelector('#about')
const contact = document.querySelector('#contact')

const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

const boxProperties = {
  background: '#00aa00',
  width: '550px',
  height: '400px',
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
  onfocus: function(){
    this.setBackground('#00aa00');
  },
  onblur: function () {
    this.setBackground('#333')
  }
}

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    ...boxProperties, 
    title: 'eu', 
    mount: aboutContent,
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    ...boxProperties,
    title: 'fala tu',
    mount: contactContent,
    left: 700,
  })
})