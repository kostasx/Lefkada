import PropTypes from "prop-types";
import config from "@config";

/* eslint-disable-next-line */
function GA() {
  return (
    <>
      {/* Google Analytics: change UA-XXXXX-Y to be your site's ID. */}
      <script>
        window.ga = function () {ga.q.push(arguments)}; ga.q = []; ga.l = +new
        Date; ga('create', 'UA-XXXXX-Y', 'auto'); ga('set', 'anonymizeIp',
        true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
      </script>
      <script
        async
        src="https://www.google-analytics.com/analytics.js"
      ></script>
    </>
  );
}

export default function Footer() {
  const { contact, social, review, special_pages, navigation } = config;
  // console.log({ contact, social, review, special_pages, navigation });

  return (
    <footer className="container mx-auto mb-32">
      
      <div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-center lg:justify-between">
        {/* LOGO */}
        <div className="flex justify-center items-center w-full lg:w-1/4">
          <img
            alt="Picnic Bistro Logo"
            className="h-24 md:h-32"
            src={config.logo.dark}
          />
        </div>

        {/* SITE MENU */}
        <div className="flex justify-center h-64 w-full lg:w-1/4">
          <ul className="w-1/2">
            <li className="font-sans text-2xl font-bold tracking-wide pb-6">
              SITE MENU
            </li>
            {navigation.map((item) => {
              return (
                <li key={item.label} className="pb-1">
                  <a href={item.URL}>{item.label}</a>
                </li>
              );
            })}
            {special_pages.map((item) => {
              return (
                <li key={item} className="pb-1">
                  <a href={item}>{item}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* FIND US */}
        <div className="flex justify-center h-64 w-full lg:w-1/4">
          <ul className="DISABLED-ml-20 w-1/2">
            <li className="font-sans text-2xl font-bold tracking-wide pb-4">
              FIND US
            </li>

            <li className="font-sans  font-bold text-lg py-2">Address:</li>
            {contact.address.map((a) => {
              return <li key={a}>{a}</li>;
            })}

            <li className="font-sans  font-bold text-lg py-2">Telephone:</li>
            {contact.telephones.map((t) => {
              return <li key={t}>{t}</li>;
            })}

            <li className="font-sans  font-bold text-lg py-2">Email:</li>
            {contact.email.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="flex justify-center h-64 w-full DISABLEDml-10 lg:-ml-0 lg:w-1/4">
          <ul className="w-1/2">
            <li className="font-sans text-2xl font-bold tracking-wide pb-4">
              SOCIAL
            </li>
            <li className="font-sans font-bold text-lg py-2">
              Find us on social
            </li>
            <li>
              {Object.entries(social).map(([key, value], idx, array) => {
                return (
                  <a key={key} target="_blank" rel="noreferrer" href={value}>
                    {key}
                    {idx === array.length - 1 ? "" : " • "}
                  </a>
                );
              })}
            </li>

            <li className="font-sans font-bold text-lg py-2">
              Leave us a note
            </li>
            <li>
              {Object.entries(review).map(([key, value], idx, array) => {
                return (
                  <a key={key} target="_blank" rel="noreferrer" href={value}>
                    {key}
                    {idx === array.length - 1 ? "" : " • "}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>
      </div>

      {/* CREATOR */}
      <div className="hidden flex justify-center items-center pt-20">
        <p className="text-sm">
          Template by <a href="https://blondelguillau.me">Guillaume Blondel</a>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  config: PropTypes.object,
};
