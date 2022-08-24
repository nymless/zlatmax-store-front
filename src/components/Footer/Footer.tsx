import React from 'react';
import styles from './Footer.module.css';
import { AppContainer } from '../../shared/AppContainer/AppContainer';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import call from './svg/call.svg';
import time from './svg/time.svg';
import address from './svg/address.svg';
import mail from './svg/mail.svg';
import facebook from './svg/facebook.svg';
import viber from './svg/viber.svg';
import telegram from './svg/telegram.svg';
import whatsapp from './svg/whatsapp.svg';
import SubscriptionForm from './SubscriptionForm/SubscriptionForm';
import { AppRouts } from '../../variables/AppRouts';

const Footer = () => {
  return (
    <AppContainer>
      <div className={styles.Footer}>
        <div className={classNames(styles.row, styles.top)}>
          <div className={styles.column}>
            <h4 className={styles.heading}>Информация</h4>
            <Link to={AppRouts.MOSCOW} className={styles.link}>
              {'Златоустовские ножи\nв Москве и Московской\nобласти'}
            </Link>
            <Link to={AppRouts.STEEL} className={styles.link}>
              Ножевые стали
            </Link>
            <Link to={AppRouts.ABOUT} className={styles.link}>
              О нас
            </Link>
            <Link to={AppRouts.PAYMENT} className={styles.link}>
              {'Условия оплаты\nи доставки'}
            </Link>
            <Link to={AppRouts.PRIVACY} className={styles.link}>
              {'Политика\nконфиденциальности'}
            </Link>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>Служба поддержки</h4>
            <Link to={AppRouts.CONTACTS} className={styles.link}>
              Контактная информация
            </Link>
            <Link to={AppRouts.RETURNS} className={styles.link}>
              Возврат товара
            </Link>
            <Link to={AppRouts.SITEMAP} className={styles.link}>
              Карта сайта
            </Link>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>Дополнительно</h4>
            <Link to={AppRouts.CERTIFICATES} className={styles.link}>
              Подарочные сертификаты
            </Link>
            <Link to={AppRouts.PARTNERS} className={styles.link}>
              Партнеры
            </Link>
            <Link to={AppRouts.SALES} className={styles.link}>
              Товары со скидкой
            </Link>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>Личный кабинет</h4>
            <Link to={AppRouts.ACCOUNT} className={styles.link}>
              Личный кабинет
            </Link>
            <Link to={AppRouts.ORDERS} className={styles.link}>
              История заказов
            </Link>
            <Link to={AppRouts.BOOKMARKS} className={styles.link}>
              Мои закладки
            </Link>
            <Link to={AppRouts.NEWSLETTER} className={styles.link}>
              Рассылка новостей
            </Link>
          </div>
        </div>
        <div className={classNames(styles.row, styles.middle)}>
          <div className={styles.column}>
            <h4 className={styles.heading}>Контакты</h4>
            <div className={styles.item}>
              <img className={styles.svg} src={call} alt="Telephone" />
              <div className={styles.text}>8 (800) 777-49-67</div>
            </div>
            <div className={styles.item}>
              <img className={styles.svg} src={time} alt="Open hours" />
              <div className={styles.text}>{'Пн - Пт\n7:00 - 16:00 (МСК)'}</div>
            </div>
            <div className={styles.item}>
              <img className={styles.svg} src={address} alt="Address" />
              <div className={styles.text}>
                {'Златоуст,\nул. Шоссейная,\nд. 1, офис «6Б»'}
              </div>
            </div>
            <div className={styles.item}>
              <img className={styles.svg} src={mail} alt="Email" />
              <div className={styles.text}>info@zlatmax.ru</div>
            </div>
            <div className={styles.messengers}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com"
              >
                <img
                  className={styles.messenger}
                  src={facebook}
                  alt="Facebook"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.viber.com">
                <img className={styles.messenger} src={viber} alt="Facebook" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.telegram.com"
              >
                <img
                  className={styles.messenger}
                  src={telegram}
                  alt="Telegram"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.whatsapp.com"
              >
                <img
                  className={styles.messenger}
                  src={whatsapp}
                  alt="Whatsapp"
                />
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>Полезные ссылки</h4>
            <Link to={AppRouts.METHODS} className={styles.link}>
              Способы оплаты и доставки
            </Link>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>Наша гарантия</h4>
            <div className={styles.text}>
              {'Недовольны своей покупкой?\n' +
                'Вы можете вернуть ее в течении\n' +
                '30 дней с даты получения,\n' +
                'согласно '}
              <Link to={AppRouts.RULES} className={styles.rulesLink}>
                нашим правилам
              </Link>
            </div>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>Новостная рассылка</h4>
            <div className={styles.subscriptionBlock}>
              <div>Подпишитесь прямо сейчас!</div>
              <SubscriptionForm />
            </div>
          </div>
        </div>
        <div className={classNames(styles.row, styles.bottom)}>
          <div className={styles.column}>
            Все материалы, размещенные на сайте, носят справочный характер и не
            являются публичной офертой, определяемойположениями Статьи 437
            Гражданского кодекса Российской Федерации. При копировании
            материалов гиперссылка на www.zlatmax.ru обязательна!
          </div>
          <div className={styles.column}>
            Златоустовские ножи www.zlatmax.ru ©
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default Footer;
