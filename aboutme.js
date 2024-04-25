const aboutMeInfo = document.querySelector('.aboutme-info');

const personalInfo = `
<h1>Personal Info</h1><br>
<p1><b>Name:</b> Nombulelo</p1><br>
<p2><b>Surname:</b> Asiya</p2><br>
<p3><b>Age:</b> 28</p3><br>
<p4><b>Likes:</b> Poetry, Literature, Computers, Psychology</p4><br>
<p5><b>Skills:</b><ul>
  <li>Customer Satisfaction</li>
  <li>Technical Support</li>
  <li>Business Administration</li>
  <li>General/Office Administration</li>
  <li>Psychosocial Support</li>
  <li>Facilitation</li>
  <li>Presentation</li>
</ul></p5>
`;

const education = `
<h2>Education</h2>
<ul>
  <li>Matric - 2013</li>
  <li>Introduction to Reception and Occupational Safety and Health Certification</li>
  <li>Providing Psychosocial Support in Schools Certification</li>
  <li>Digital Literacy Certification</li>
  <li>Internet Safety Training Certification</li>
</ul>
`;

const experience = `
<h3>Experience</h3>
<ul>
  <li>Customer Services October 2019 - February 2020 (CCI Durban)</li>
  <li>Technical Services March 2020 - June 2020(CCI Durban)</li>
  <li>Online Admin September 2020 - February 2023 (Freelance)</li>
  <li>Staff Writer November 2022 - May 2023 (DIamond Magazine)</li>
  <li>Care and Support Assistant (psychosocial support) & Educators Assistant May 2023 - September 2023 (Laerskool Vooruitsig)</li>
  <li>Chairperson Hearts of Lavender June 2022 - Present</li>
</ul>
`;

const projects = `
<h3>Projects</h3>
<ul>
  <li>10+ published articles <a href="www.diamondmagsa.co.za">www.diamondmagsa.co.za 2023</a></li>
  <li>Seminar creation for Hearts of Lavender 2023</li>
  <li>Workshop creation and facilitation for Hearts of Lavender 2023</li>
  <li>Forbidden Fruit (an anthology of 10 short stories written by me for Hearts of Lavender) <a href="https://payhip.com/b/HU49k">payhip.com 2024</a></li>
  <li>Psychosocial support presentation</li>
  <li>mLab HTML personal website 2024</li>
</ul>
`;

aboutMeInfo.innerHTML = personalInfo + '<br><hr><br>' + education + '<br><hr><br>' + experience + '<br><hr><br>' + projects;