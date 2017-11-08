import {
  Component,
  OnInit
} from '@angular/core';

const DISH = {
  name: 'Uthappizza',
  image: '/assets/images/uthappizza.png',
  category: 'mains',
  label: 'Hot',
  price: '4.99',
  description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
  comments: [{
      rating: 5,
      comment: "Imagine all the eatables, living in conFusion!",
      author: "John Lemon",
      date: "2012-10-16T17:57:28.556094Z"
    },
    {
      rating: 4,
      comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
      author: "Paul McVites",
      date: "2014-09-05T17:57:28.556094Z"
    },
    {
      rating: 3,
      comment: "Eat it, just eat it!",
      author: "Michael Jaikishan",
      date: "2015-02-13T17:57:28.556094Z"
    },
    {
      rating: 4,
      comment: "Ultimate, Reaching for the stars!",
      author: "Ringo Starry",
      date: "2013-12-02T17:57:28.556094Z"
    },
    {
      rating: 2,
      comment: "It's your birthday, we're gonna party!",
      author: "25 Cent",
      date: "2011-12-02T17:57:28.556094Z"
    }
  ]
};

const m_comments = DISH.comments;

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish = DISH;

  f_comment = m_comments[0].comment;
  f_rate = m_comments[0].rating;
  f_author = m_comments[0].author;
  f_date = m_comments[0].date;

  s_comment = m_comments[1].comment;
  s_rate = m_comments[1].rating;
  s_author = m_comments[1].author;
  s_date = m_comments[1].date;

  th_comment = m_comments[2].comment;
  th_rate = m_comments[2].rating;
  th_author = m_comments[2].author;
  th_date = m_comments[2].date;

  fo_comment = m_comments[3].comment;
  fo_rate = m_comments[3].rating;
  fo_author = m_comments[3].author;
  fo_date = m_comments[3].date;

  fi_comment = m_comments[4].comment;
  fi_rate = m_comments[4].rating;
  fi_author = m_comments[4].author;
  fi_date = m_comments[4].date;

  constructor() {}

  ngOnInit() {}

}

