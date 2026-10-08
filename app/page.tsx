'use client'

import { useState } from 'react'
import {
  ArrowDownToLine,
  ArrowUpRight,
  Bell,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  CreditCard,
  FileCheck2,
  FileWarning,
  LayoutDashboard,
  ListFilter,
  MoreHorizontal,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Wallet,
  X,
  Zap,
} from 'lucide-react'

const transactions = [
  { id: 'TRX-009821', source: 'Stripe · Recebimento', date: '08 out, 10:42', value: 'R$ 12.480,00', status: 'Conciliado', statusType: 'success', icon: CreditCard },
  { id: 'TRX-009820', source: 'Itaú · Pix recebido', date: '08 out, 09:18', value: 'R$ 3.250,00', status: 'Pendente', statusType: 'warning', icon: ArrowDownToLine },
  { id: 'TRX-009819', source: 'Asaas · Boleto', date: '07 out, 17:55', value: 'R$ 8.900,00', status: 'Divergência', statusType: 'danger', icon: FileWarning },
  { id: 'TRX-009818', source: 'Nubank · Transferência', date: '07 out, 16:32', value: 'R$ 1.780,00', status: 'Conciliado', statusType: 'success', icon: ArrowUpRight },
  { id: 'TRX-009817', source: 'Shopify · Venda', date: '07 out, 14:10', value: 'R$ 6.420,00', status: 'Conciliado', statusType: 'success', icon: Wallet },
]

const navItems = [
  { label: 'Visão geral', icon: LayoutDashboard, active: true },
  { label: 'Conciliações', icon: FileCheck2, count: '12' },
  { label: 'Transações', icon: ArrowDownToLine },
  { label: 'Contas e fontes', icon: Wallet },
]

function StatusBadge({ status, type }: { status: string; type: string }) {
  return <span className={`status-badge ${type}`}><span className="status-dot" />{status}</span>
}

export default function Page() {
  const [period, setPeriod] = useState('Este mês')
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark"><ShieldCheck /></div><span>nexora</span></div>
        <div className="workspace-switcher"><div className="workspace-avatar">AC</div><div><strong>Acme Corp.</strong><small>Plano Enterprise</small></div><ChevronDown /></div>
        <nav className="main-nav" aria-label="Navegação principal">
          <p className="nav-label">Workspace</p>
          {navItems.map(({ label, icon: Icon, active, count }) => <button className={`nav-item ${active ? 'active' : ''}`} key={label}><Icon /> <span>{label}</span>{count && <em>{count}</em>}</button>)}
          <p className="nav-label nav-label-spaced">Gestão</p>
          <button className="nav-item"><Zap /><span>Regras automáticas</span></button>
          <button className="nav-item"><FileWarning /><span>Exceções</span><em className="alert-count">3</em></button>
        </nav>
        <div className="sidebar-bottom"><button className="nav-item"><Settings /><span>Configurações</span></button><button className="nav-item"><CircleHelp /><span>Central de ajuda</span></button><div className="profile"><div className="profile-avatar">MS</div><div><strong>Marina Silva</strong><small>Administrador</small></div><MoreHorizontal /></div></div>
      </aside>

      <main className="main-content">
        <header className="topbar"><div className="breadcrumbs"><span>Workspace</span><span>/</span><strong>Visão geral</strong></div><div className="top-actions"><button className="icon-button" aria-label="Buscar"><Search /></button><button className="icon-button notification-button" onClick={() => setShowNotifications(!showNotifications)} aria-label="Notificações"><Bell /><i /></button><div className="top-avatar">MS</div></div>{showNotifications && <div className="notification-popover"><strong>Notificações</strong><p>3 exceções aguardam sua revisão.</p><p className="muted">Última atualização há 4 min</p></div>}</header>
        <div className="content-wrap">
          <section className="page-heading"><div><div className="eyebrow"><span className="live-dot" /> Dados atualizados agora</div><h1>Olá, Marina <span>—</span></h1><p>Acompanhe a saúde financeira das suas operações.</p></div><div className="heading-actions"><button className="secondary-button"><CalendarDays />{period}<ChevronDown /></button><button className="primary-button"><RefreshCw /> Sincronizar agora</button></div></section>
          <section className="metrics-grid" aria-label="Indicadores principais">
            <article className="metric-card primary-metric"><div className="metric-top"><span>Saldo conciliado</span><span className="metric-icon green"><ShieldCheck /></span></div><div className="metric-value">R$ 284.620,45</div><div className="metric-footer"><span className="positive"><ArrowUpRight /> 12,8%</span><span>vs. mês anterior</span></div><div className="sparkline green-line"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div></article>
            <article className="metric-card"><div className="metric-top"><span>Taxa de conciliação</span><span className="metric-icon blue"><FileCheck2 /></span></div><div className="metric-value">96,4<span className="metric-unit">%</span></div><div className="progress-track"><div className="progress-fill" /></div><div className="metric-footer"><span>1.248 de 1.294 transações</span><strong>+2,1%</strong></div></article>
            <article className="metric-card"><div className="metric-top"><span>Em divergência</span><span className="metric-icon orange"><FileWarning /></span></div><div className="metric-value">R$ 18.920,00</div><div className="metric-footer"><span>12 transações para revisar</span><a href="#divergencias">Ver detalhes <ArrowUpRight /></a></div><div className="mini-bar"><i /><i /><i /><i /><i /><i /><i /></div></article>
            <article className="metric-card"><div className="metric-top"><span>Tempo médio</span><span className="metric-icon purple"><Zap /></span></div><div className="metric-value">2<span className="metric-unit">h</span> 14<span className="metric-unit">min</span></div><div className="metric-footer"><span>Até a conciliação</span><span className="positive"><ArrowDownToLine /> 18,2%</span></div><div className="time-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></article>
          </section>

          <section className="dashboard-grid"><article className="panel chart-panel"><div className="panel-header"><div><h2>Movimentação financeira</h2><p>Entradas e saídas conciliadas no período</p></div><button className="more-button"><MoreHorizontal /></button></div><div className="chart-legend"><span><i className="legend-dot income" /> Entradas <strong>R$ 186.420</strong></span><span><i className="legend-dot expense" /> Saídas <strong>R$ 92.840</strong></span></div><div className="chart"><div className="chart-y"><span>60k</span><span>40k</span><span>20k</span><span>0</span></div><div className="chart-area"><div className="grid-lines"><i /><i /><i /><i /></div><svg viewBox="0 0 700 190" preserveAspectRatio="none" aria-label="Gráfico de entradas e saídas"><defs><linearGradient id="fillIncome" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#18a87a" stopOpacity=".18" /><stop offset="100%" stopColor="#18a87a" stopOpacity="0" /></linearGradient></defs><path d="M0,140 C35,125 55,145 88,118 S140,105 175,124 S225,70 260,82 S315,105 350,73 S400,48 435,71 S480,40 520,54 S565,73 600,40 S650,30 700,18 L700,190 L0,190Z" fill="url(#fillIncome)" /><path d="M0,140 C35,125 55,145 88,118 S140,105 175,124 S225,70 260,82 S315,105 350,73 S400,48 435,71 S480,40 520,54 S565,73 600,40 S650,30 700,18" fill="none" stroke="#18a87a" strokeWidth="3" strokeLinecap="round" /><path d="M0,164 C40,150 55,168 92,145 S145,153 180,158 S230,130 265,143 S315,120 350,130 S400,100 435,118 S480,105 520,125 S570,100 610,110 S660,90 700,98" fill="none" stroke="#b8c8e2" strokeWidth="2.5" strokeDasharray="5 5" /></svg><div className="chart-x"><span>01 out</span><span>05 out</span><span>10 out</span><span>15 out</span><span>20 out</span><span>25 out</span><span>30 out</span></div></div></div></article>
            <article className="panel health-panel"><div className="panel-header"><div><h2>Saúde das fontes</h2><p>Status das conexões financeiras</p></div><button className="more-button"><MoreHorizontal /></button></div><div className="health-score"><div className="score-ring"><div><strong>98</strong><small>/100</small></div></div><div><strong>Excelente</strong><p>Suas fontes estão operando normalmente.</p></div></div><div className="source-list"><div><span className="source-logo stripe">S</span><div><strong>Stripe</strong><small>Sincronizado há 2 min</small></div><span className="online-dot" /></div><div><span className="source-logo itau">i</span><div><strong>Itaú Empresas</strong><small>Sincronizado há 5 min</small></div><span className="online-dot" /></div><div><span className="source-logo shopify">⌁</span><div><strong>Shopify</strong><small>Sincronizado há 8 min</small></div><span className="online-dot" /></div></div></article></section>

          <section className="panel transactions-panel" id="divergencias"><div className="panel-header"><div><h2>Transações recentes</h2><p>Últimas movimentações recebidas pelas suas fontes</p></div><div className="table-actions"><button className="filter-button"><ListFilter /> Filtros <span>2</span></button><button className="view-all">Ver todas <ArrowUpRight /></button></div></div><div className="table-wrap"><table><thead><tr><th>Transação</th><th>Data e hora</th><th>Valor</th><th>Status</th><th aria-label="Ações" /></tr></thead><tbody>{transactions.map(({ id, source, date, value, status, statusType, icon: Icon }) => <tr key={id}><td><div className="transaction-name"><span className="transaction-icon"><Icon /></span><div><strong>{source}</strong><small>{id}</small></div></div></td><td className="muted-cell">{date}</td><td><strong>{value}</strong></td><td><StatusBadge status={status} type={statusType} /></td><td><button className="row-more" aria-label={`Mais opções para ${id}`}><MoreHorizontal /></button></td></tr>)}</tbody></table></div></section>
          <div className="footer-note"><ShieldCheck /> Todos os dados são criptografados e protegidos com segurança de nível bancário <span>•</span> Última sincronização: hoje, 10:42</div>
        </div>
      </main>
    </div>
  )
}
