const InvestmentFund: React.FC = () => (
  <div>
    <p className='my-4'>
      Investicioni fond obuhvata sva potrebna finansijska sredstva koja se ulažu u razvoj projekta
      sve do njegovog samostalnog funkcionisanja. Sredstva iz investicionog fonda se raspoređuju i
      ulažu u više razvojnih etapa projekta. Nakon faze pripreme i prikupljanja finansijskih
      sredstava, projekat započinje eskperimentalno delovanje na manjoj lokaciji poput tržnog centra
      (buvljaka), sa manjim tehničkim kapacitetima koji se sve više razvijaju kako projekat
      napreduje iz etape u etapu. Potom se novac ulaže u prostornu ekspanziju projekta na čitav grad
      (Suboticu), a u završnoj fazi projekat se širi i na druge gradove.
    </p>
    <hr className='my-6 border-gray-300' />
    <h2 className='text-2xl font-semibold'>VREDNOST INVESTICIONOG FONDA</h2>
    <p className='my-4'>50.000 EUR</p>
    <hr className='my-6 border-gray-300' />
    <h2 className='text-2xl font-semibold'>RASPODELA INVESTICIONOG FONDA</h2>
    <div className='my-4'>
      <div>0.) Fond za planiranje i pripremu 4.272 EUR</div>
      <div className='pl-4'>
        <div>0.1.) Priprema nacrta tehničkog plana 7,5 EUR</div>
        <div>0.2.) Nominacija projekta 46 EUR</div>
        <div>0.3.) Okupljanje saradnika 171 EUR</div>
        <div>0.4.) Testiranje i izrada Tehničkog plana 2.349 EUR</div>
        <div>0.5.) Priprema Plana i programa poslovanja 468,5 EUR</div>
        <div>0.6.) Priprema Ugovora o saradnji 155 EUR</div>
        <div>0.7.) Priprema i održavanje budžeta 1.075 EUR</div>
      </div>
      <div>1.) Fond za prikupljanje finansijskih sredstava 3.261 EUR</div>
      <div className='pl-4'>
        <div>1.1.) Priprema Investicionog plana i programa 407 EUR</div>
        <div>1.2.) Priprema platforme za investicioni fond 993 EUR</div>
        <div>1.3.) Oglašavanje Investicionog plana i programa 1.125,5 EUR</div>
        <div>1.4.) Kontaktiranje potencijalnih investitora 735,5 EUR</div>
      </div>
      <div>2.) Fond za uvođenje preglednika po mapama za buvljak 15.011 EUR</div>
      <div className='pl-4'>
        <div>2.1.) Priprema platforme za preglednik po mapama 5.341 EUR</div>
        <div>2.2.) Popis buvljaka i objavljivanje informacija 3.890 EUR</div>
        <div>2.3.) Upoznavanje prodavaca sa platformom 655,5 EUR</div>
        <div>2.4.) Objavljivanje probnih besplatnih reklama 416 EUR</div>
        <div>2.5.) Navođenje kupaca na veliki broj pregleda 3.958,5 EUR</div>
        <div>2.6.) Navođenje prodavaca na plaćeno oglašavanje 750 EUR</div>
      </div>
      <div>3.) Fond za uvođenje veb izloga za prodajne objekte na buvljaku 5.625 EUR</div>
      <div className='pl-4'>
        <div>3.1.) Priprema platforme za veb izloge 3.928 EUR</div>
        <div>3.2.) Otvaranje promotivnog veb izloga 397 EUR</div>
        <div>3.3.) Promocija veb izloga prodavcima 1.300 EUR</div>
      </div>
      <div>4.) Fond za uvođenje enciklopedije proizvoda na buvljaku 2.553,5 EUR</div>
      <div className='pl-4'>
        <div>4.1.) Priprema platforme za enciklopediju proizvoda 1.373 EUR</div>
        <div>4.2.) Otvaranje promotivnih stranica enciklopedije proizvoda 526,5 EUR</div>
        <div>4.3.) Promocija enciklopedije proizvoda prodavcima 654 EUR</div>
      </div>
      <div>5.) Fond za ekspanziju projekta u Subotici 16.218,5 EUR</div>
      <div className='pl-4'>
        <div>5.1.) Priprema platforme za Suboticu 8 EUR</div>
        <div>5.2.) Popis Subotice i objavljivanje informacija 8.887,5 EUR</div>
        <div>5.3.) Navođenje prodavaca na upotrebu veb izloga 3.660 EUR</div>
        <div>5.4.) Objavljivanje probnih besplatnih reklama 119 EUR</div>
        <div>5.5.) Navođenje kupaca na veliki broj pregleda 2.644 EUR</div>
        <div>5.6.) Navođenje prodavaca na plaćeno oglašavanje 900 EUR</div>
      </div>
      <div>6.) Fond za ekspanziju projekta izvan Subotice 3.059 EUR</div>
      <div className='pl-4'>
        <div>6.1.) Priprema platforme za Srbiju 8 EUR</div>
        <div>6.2.) Osnivanje firme 958 EUR</div>
        <div>6.3.) Organizovanje međugradskih inkasanata 443,5 EUR</div>
        <div>6.4.) Izdavanje dokumentacije firmama 271 EUR</div>
        <div>6.5.) Popis drugih gradova 1.378,5 EUR</div>
      </div>
    </div>
    <hr className='my-6 border-gray-300' />
  </div>
);

export default InvestmentFund;
