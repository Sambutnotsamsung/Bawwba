:root {
  --bg: #f3f4f6;
  --panel: #ffffff;
  --panel-alt: #f7f9fc;
  --ink: #1e2733;
  --muted: #64748b;
  --line: #dfe5ee;
  --primary: #ffc72c;
  --primary-dark: #c98d00;
  --success: #12a150;
  --danger: #d6322e;
  --warning: #c77700;
  --shadow: 0 18px 36px rgba(16, 24, 40, 0.08);
  --radius: 18px;
}

* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
  background: linear-gradient(180deg, #eff4fa 0%, var(--bg) 100%);
  color: var(--ink);
}
body { min-height: 100vh; }
button, input, select {
  font: inherit;
}
button { cursor: pointer; }
.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}
.topbar {
  background: linear-gradient(180deg, #1e2733 0%, #1d2830 100%);
  color: white;
  box-shadow: 0 8px 30px rgba(16, 24, 40, 0.18);
}
.shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 14px;
}
.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-mark {
  width: 32px;
  height: 36px;
  border-radius: 16px 16px 8px 8px;
  border: 3px solid var(--primary);
  position: relative;
  box-shadow: 0 0 20px rgba(255, 199, 44, 0.28);
}
.brand-mark::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 8px;
  width: 3px;
  height: 14px;
  background: var(--primary);
  transform: translateX(-50%);
}
.brand-name {
  font-size: 1.2rem;
  font-weight: 700;
}
.brand-sub {
  color: #cfe0f6;
  font-size: 0.75rem;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.user-badge {
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
}
.tabs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 10px;
}
.nav-tab {
  border: 0;
  background: transparent;
  color: #dbe6f9;
  padding: 10px 14px 12px;
  border-bottom: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.nav-tab.active {
  color: white;
  border-color: var(--primary);
}
.page {
  padding: 32px 0 48px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}
.stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px 18px 16px;
}
.stat-card span {
  display: block;
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 8px;
}
.stat-card strong {
  font-size: clamp(1.6rem, 2vw, 2.4rem);
  letter-spacing: -0.04em;
}
.two-col {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}
.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px;
}
.panel h2 {
  margin: 0 0 16px;
}
.detail-panel {
  border-width: 3px;
}
.detail-panel.released { border-color: var(--success); }
.detail-panel.manual_review { border-color: var(--warning); }
.detail-panel.not_registered { border-color: var(--danger); }
.detail-panel.rejected { border-color: var(--danger); }
.plate-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 14px 18px;
  border-radius: 12px;
  background: #fff;
  border: 3px solid #101828;
  font-size: clamp(1.2rem, 3vw, 2.1rem);
  font-weight: 900;
  letter-spacing: 0.14em;
  color: #101828;
  direction: ltr;
}
.plate-box.small { font-size: 1.1rem; min-width: 120px; }
.plate-box.tiny { font-size: 0.9rem; min-width: 88px; padding: 10px 12px; }
.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
}
.detail-header h3 { margin: 0; }
.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  text-transform: uppercase;
  font-weight: 700;
}
.status-pill.released { background: rgba(18,161,80,0.12); color: var(--success); }
.status-pill.manual_review { background: rgba(199,119,0,0.12); color: var(--warning); }
.status-pill.not_registered, .status-pill.rejected { background: rgba(214,50,46,0.10); color: var(--danger); }
.confidence-bar {
  height: 10px;
  background: var(--panel-alt);
  border-radius: 999px;
  overflow: hidden;
  margin: 14px 0 16px;
}
.confidence-bar i {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--success));
  border-radius: inherit;
}
.actions, .actions-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 14px;
}
.primary-btn, .ghost-btn, .danger-btn {
  border: 0;
  border-radius: 12px;
  padding: 11px 18px;
  font-weight: 700;
  transition: transform 0.15s ease, opacity 0.15s ease;
}
.primary-btn:hover, .ghost-btn:hover, .danger-btn:hover { transform: translateY(-1px); }
.primary-btn {
  background: var(--primary);
  color: #1d1d1d;
}
.danger-btn {
  background: var(--danger);
  color: white;
}
.ghost-btn {
  background: var(--panel-alt);
  color: var(--ink);
  border: 1px solid var(--line);
}
.ghost-btn.danger { color: var(--danger); }
.lookup-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  margin-top: 18px;
}
input, select {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--panel-alt);
  padding: 12px 14px;
  color: var(--ink);
}
.scan-list, .scan-log, .table-list {
  display: grid;
  gap: 10px;
}
.scan-item {
  background: var(--panel-alt);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
}
.scan-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
}
.scan-meta, .muted {
  color: var(--muted);
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.board-card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel-alt);
  padding: 16px;
}
.board-card h3 { margin: 14px 0 8px; }
.vehicle-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}
.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.list-header input {
  max-width: 260px;
}
.table-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  border-top: 1px solid var(--line);
  padding: 12px 0;
}
.chart-grid {
  height: 150px;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 8px;
  align-items: end;
  margin: 10px 0 20px;
}
.bar-column {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 8px;
  height: 100%;
  color: var(--muted);
  font-size: 0.72rem;
}
.bar-column i {
  display: block;
  width: 100%;
  min-height: 22px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #ffd970, var(--primary));
}
.log-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 12px;
  padding: 10px 0;
  border-top: 1px solid var(--line);
}
.role-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}
.mini-panel {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel-alt);
  padding: 16px;
}
.mini-panel ul {
  margin: 12px 0 0;
  padding-left: 18px;
  color: var(--muted);
}
.login-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}
.login-card {
  width: min(440px, 100%);
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 24px;
  padding: 28px 24px;
}
.login-card h1 {
  margin: 18px 0 20px;
  font-size: 1.8rem;
}
.login-form {
  display: grid;
  gap: 14px;
}
.login-form label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}
.demo-hint {
  margin-top: 18px;
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.5;
}
@media (max-width: 768px) {
  .two-col { grid-template-columns: 1fr; }
  .list-header { display: block; }
  .list-header input { margin-top: 10px; max-width: none; }
}
@media (max-width: 520px) {
  .shell { flex-direction: column; align-items: flex-start; gap: 12px; }
  .header-actions { width: 100%; justify-content: space-between; }
  .lookup-form { grid-template-columns: 1fr; }
}
