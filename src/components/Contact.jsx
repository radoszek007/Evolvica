import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, X } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    participants: '',
    interests: {
      ai: false,
      ms365: false,
      communication: false,
      stress: false,
      resilience: false,
      burnout: false,
      other: false
    },
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleCheckboxChange = (key) => {
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [key]: !formData.interests[key]
      }
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Jméno a příjmení je povinné pole';
    if (!formData.company.trim()) newErrors.company = 'Název firmy je povinný údaj';
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail je povinné pole';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Zadejte prosím platný e-mailový formát';
    }

    if (!formData.message.trim()) newErrors.message = 'Zpráva pro nás je povinná';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Simulate API submission
      console.log('Form data submitted:', formData);
      setShowSuccessModal(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      participants: '',
      interests: {
        ai: false,
        ms365: false,
        communication: false,
        stress: false,
        resilience: false,
        burnout: false,
        other: false
      },
      message: ''
    });
    setShowSuccessModal(false);
  };

  return (
    <section id="kontakt" className="section" style={{ backgroundColor: 'var(--color-neutral-bg)' }}>
      <div className="container">
        <div className="contact-grid">
          
          <AnimateOnScroll className="contact-info-panel">
            <div>
              <span className="section-tag" style={{ marginBottom: '1rem' }}>Poptávka</span>
              <h2 className="contact-info-title">Chcete připravit vzdělávací program pro vaši firmu?</h2>
            </div>
            <p className="contact-info-text">
              Napište nám, jaké dovednosti potřebujete rozvíjet, kolik lidí chcete školit a v jakém pracovním prostředí fungují. Navrhneme vhodný rámec vzdělávání a další postup.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <Mail className="contact-detail-icon" />
                <a href="mailto:info@evolvica.cz" className="contact-detail-text hover-teal">
                  info@evolvica.cz
                </a>
              </div>
              <div className="contact-detail-item">
                <Phone className="contact-detail-icon" />
                <span className="contact-detail-text">+420 777 123 456</span>
              </div>
              <div className="contact-detail-item">
                <MapPin className="contact-detail-icon" />
                <span className="contact-detail-text">Praha, Česká republika</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="contact-form-card" delay={0.15}>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                
                <div className="form-group">
                  <label className="form-label" htmlFor="form-name">
                    Jméno a příjmení <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Jan Novák"
                  />
                  {errors.name && <div className="form-error-msg">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-company">
                    Firma <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="form-company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Název vaší společnosti"
                  />
                  {errors.company && <div className="form-error-msg">{errors.company}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-email">
                    E-mail <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="novak@firma.cz"
                  />
                  {errors.email && <div className="form-error-msg">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-phone">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+420 777 123 456"
                  />
                </div>

                <div className="form-group form-full">
                  <label className="form-label" htmlFor="form-participants">
                    Počet zaměstnanců / účastníků
                  </label>
                  <select
                    id="form-participants"
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Vyberte počet účastníků...</option>
                    <option value="do 10">do 10</option>
                    <option value="11-50">11 – 50</option>
                    <option value="51-250">51 – 250</option>
                    <option value="více než 250">více než 250</option>
                  </select>
                </div>

                <div className="form-group form-full">
                  <label className="form-label">Oblasti zájmu</label>
                  <div className="form-checkbox-grid">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interests.ai}
                        onChange={() => handleCheckboxChange('ai')}
                        className="checkbox-input"
                      />
                      AI v pracovní praxi
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interests.ms365}
                        onChange={() => handleCheckboxChange('ms365')}
                        className="checkbox-input"
                      />
                      Microsoft 365 a digi. kompetence
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interests.communication}
                        onChange={() => handleCheckboxChange('communication')}
                        className="checkbox-input"
                      />
                      Komunikace v prac. situacích
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interests.stress}
                        onChange={() => handleCheckboxChange('stress')}
                        className="checkbox-input"
                      />
                      Stres management
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interests.resilience}
                        onChange={() => handleCheckboxChange('resilience')}
                        className="checkbox-input"
                      />
                      Resilience a prac. odolnost
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interests.burnout}
                        onChange={() => handleCheckboxChange('burnout')}
                        className="checkbox-input"
                      />
                      Prevence přetížení a vyhoření
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.interests.other}
                        onChange={() => handleCheckboxChange('other')}
                        className="checkbox-input"
                      />
                      Jiné oblasti
                    </label>
                  </div>
                </div>

                <div className="form-group form-full">
                  <label className="form-label" htmlFor="form-message">
                    Zpráva <span>*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Napište nám bližší informace o vašich potřebách a představách..."
                  />
                  {errors.message && <div className="form-error-msg">{errors.message}</div>}
                </div>

                <div className="form-full" style={{ marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Odeslat poptávku
                  </button>
                </div>

              </div>
            </form>
          </AnimateOnScroll>

        </div>
      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button 
              onClick={resetForm} 
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted-dark)' }}
              aria-label="Zavřít"
            >
              <X size={20} />
            </button>
            <div className="modal-success-icon">
              <Check size={36} />
            </div>
            <h3 className="modal-title">Poptávka odeslána</h3>
            <p className="modal-text">
              Děkujeme za váš zájem o vzdělávací programy **Evolvica One**. Vaši poptávku jsme úspěšně přijali. Naši zástupci se vám ozvou zpět do 24 hodin na uvedený e-mail pro domluvení dalšího postupu.
            </p>
            <button onClick={resetForm} className="btn btn-primary" style={{ width: '100%' }}>
              Zavřít
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
