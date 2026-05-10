import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { tripsApi } from '../api';
import toast from 'react-hot-toast';
import { Calendar, FileText, Tag, ArrowRight, Save } from 'lucide-react';

export default function CreateTrip() {
  const navigate = useNavigate();
  const { id } = useParams(); // present when editing
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'draft',
  });

  useEffect(() => {
    if (!id) return;
    tripsApi.get(id).then(r => {
      const t = r.data;
      setForm({ name: t.name, description: t.description || '', startDate: t.startDate, endDate: t.endDate, status: t.status });
    });
  }, [id]);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.startDate > form.endDate) { toast.error('End date must be after start date'); return; }
    setLoading(true);
    try {
      if (isEdit) {
        await tripsApi.update(id!, form);
        toast.success('Trip updated! ✅');
        navigate(`/trips/${id}`);
      } else {
        const res = await tripsApi.create(form);
        toast.success('Trip created! 🎉');
        navigate(`/trips/${res.data.id}`);
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to save trip');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title={isEdit ? 'Edit Trip' : 'Create Trip'}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
            {isEdit ? '✏️ Edit Trip' : 'Plan a New Trip ✈️'}
          </h2>
          <p className="text-muted mb-6">{isEdit ? 'Update your trip details' : 'Give your adventure a name and set the dates'}</p>

          <div className="card card-p-lg">
            <form onSubmit={handle}>
              <div className="form-group">
                <label className="form-label">Trip Name *</label>
                <div style={{ position: 'relative' }}>
                  <Tag size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="input" style={{ paddingLeft: 38 }} placeholder="e.g. Himalayan Adventure 2025"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required maxLength={80} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <div style={{ position: 'relative' }}>
                  <FileText size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-muted)' }} />
                  <textarea className="textarea" style={{ paddingLeft: 38, minHeight: 90, resize: 'vertical' }}
                    placeholder="What's this trip about?" value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })} />
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Start Date *</label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input className="input" style={{ paddingLeft: 38 }} type="date" value={form.startDate}
                      onChange={e => setForm({ ...form, startDate: e.target.value })} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">End Date *</label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input className="input" style={{ paddingLeft: 38 }} type="date" value={form.endDate}
                      onChange={e => setForm({ ...form, endDate: e.target.value })} required min={form.startDate} />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Trip Status</label>
                <select className="select" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                  <option value="draft">📝 Draft – still planning</option>
                  <option value="active">🚀 Active – trip is happening</option>
                  <option value="completed">✅ Completed</option>
                </select>
              </div>

              {form.name && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card" style={{ overflow: 'hidden', marginBottom: 20 }}>
                  <div style={{ height: 90, background: 'linear-gradient(135deg,var(--sky-500),var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>✈️</div>
                  <div style={{ padding: 14 }}>
                    <div style={{ fontWeight: 700 }}>{form.name}</div>
                    {form.startDate && form.endDate && <div className="text-sm text-muted">{form.startDate} → {form.endDate}</div>}
                  </div>
                </motion.div>
              )}

              <div className="flex gap-3">
                <button type="button" className="btn btn-outline" onClick={() => navigate(isEdit ? `/trips/${id}` : '/trips')}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} disabled={loading}>
                  {loading ? 'Saving...' : isEdit ? <><Save size={16} /> Save Changes</> : <><ArrowRight size={16} /> Create Trip</>}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
