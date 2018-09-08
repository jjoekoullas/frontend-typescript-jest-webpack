//import application level css
import './styles/main.scss'
import {myTest} from 'app/test'

//application bootstrap goes here
document.getElementsByTagName('body')[0].innerText = myTest() ? "yup" : "nope";