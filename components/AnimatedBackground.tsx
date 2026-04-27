"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const color = "#02f091"

    // ERP nodes
    const labels = ["ERP", "HR", "CRM", "INV", "FIN", "SCM", "MFG", "POS"]
    const nodes = labels.map((label) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      label,
      pulse: Math.random() * Math.PI * 2,
    }))

    // Flowing particles along connections
    const particles: { from: number; to: number; t: number; speed: number }[] = []
    for (let i = 0; i < 20; i++) {
      particles.push({
        from: Math.floor(Math.random() * nodes.length),
        to: Math.floor(Math.random() * nodes.length),
        t: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
      })
    }

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.03
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 280) {
            const alpha = (1 - dist / 280) * 0.25
            ctx.beginPath()
            ctx.strokeStyle = `rgba(2, 240, 145, ${alpha})`
            ctx.lineWidth = 0.8

            // Circuit-style: draw with 90-degree bends
            const mx = (nodes[i].x + nodes[j].x) / 2
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(mx, nodes[i].y)
            ctx.lineTo(mx, nodes[j].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()

            // Small junction dots
            ctx.beginPath()
            ctx.arc(mx, nodes[i].y, 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(2, 240, 145, ${alpha * 1.5})`
            ctx.fill()
          }
        }
      }

      // Draw flowing particles
      particles.forEach((p) => {
        if (p.from === p.to) return
        p.t += p.speed
        if (p.t > 1) {
          p.t = 0
          p.from = p.to
          p.to = Math.floor(Math.random() * nodes.length)
        }
        const a = nodes[p.from]
        const b = nodes[p.to]
        const mx = (a.x + b.x) / 2
        let px: number, py: number
        if (p.t < 0.5) {
          const lt = p.t * 2
          px = a.x + (mx - a.x) * lt
          py = a.y
        } else {
          const lt = (p.t - 0.5) * 2
          px = mx + (b.x - mx) * lt
          py = a.y + (b.y - a.y) * lt
        }
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(2, 240, 145, 0.9)"
        ctx.fill()
      })

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = Math.abs(Math.sin(n.pulse)) * 4

        // Outer ring pulse
        ctx.beginPath()
        ctx.arc(n.x, n.y, 14 + pulse, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(2, 240, 145, 0.15)"
        ctx.lineWidth = 1
        ctx.stroke()

        // Node circle
        ctx.beginPath()
        ctx.arc(n.x, n.y, 12, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(2, 240, 145, 0.08)"
        ctx.fill()
        ctx.strokeStyle = "rgba(2, 240, 145, 0.5)"
        ctx.lineWidth = 1
        ctx.stroke()

        // Label
        ctx.font = "bold 9px monospace"
        ctx.fillStyle = "rgba(2, 240, 145, 0.8)"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(n.label, n.x, n.y)
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  )
}