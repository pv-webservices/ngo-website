async (page) => {
  const origin='http://127.0.0.1:4322';
  const routes=['','about','our-work','old-age-home','child-welfare','yoga-meditation','medical-support','day-care','our-journey','activities','gallery','videos','get-involved','donate','contact','privacy-policy','terms','support-policy'];
  await page.goto(origin+'/');
  await page.evaluate(()=>localStorage.clear());
  await page.emulateMedia({reducedMotion:'reduce'});
  let count=0;
  for(const lang of ['en','hi']){
    for(const width of [1440,390]){
      await page.setViewportSize({width,height:width===390?844:1000});
      for(const slug of routes){
        await page.goto(origin+(lang==='hi'?'/hi':'')+'/'+(slug?slug+'/':''));
        await page.evaluate(()=>document.fonts.ready);
        await page.evaluate(async()=>{await Promise.all(Array.from(document.images).filter(i=>i.getAttribute('src')).map(async i=>{i.loading='eager';await i.decode().catch(()=>{});}));});
        const name=slug||'home';
        await page.screenshot({path:`output/playwright/${lang}-${name}-${width}.webp`,fullPage:true,type:'webp',quality:65});
        count++;
      }
    }
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(origin+'/');
  return {screenshots:count};
}
