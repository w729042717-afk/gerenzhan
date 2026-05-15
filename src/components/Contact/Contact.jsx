import { useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { SiDribbble } from 'react-icons/si';
import './Contact.css';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  dribbble: SiDribbble,
};

export default function Contact({ email, social }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${email}?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="contact__info">
        <a href={`mailto:${email}`} className="contact__email">
          <FiMail className="contact__email-icon" />
          {email}
        </a>
        <div className="contact__social">
          {Object.entries(social).map(([platform, url]) => {
            const Icon = iconMap[platform];
            return Icon ? (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label={platform}>
                <Icon size={18} />
              </a>
            ) : null;
          })}
        </div>
      </div>

      {submitted ? (
        <p className="contact__thanks">感谢联系！我会尽快回复。</p>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <input
              type="text"
              name="name"
              placeholder="姓名"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__field">
            <input
              type="email"
              name="email"
              placeholder="邮箱"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__field">
            <textarea
              name="message"
              placeholder="留言内容"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="contact__submit">发送消息</button>
        </form>
      )}
    </div>
  );
}
