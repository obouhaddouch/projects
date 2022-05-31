namespace auto_app
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.panel_gm = new System.Windows.Forms.Panel();
            this.lbl_gm_over = new System.Windows.Forms.Label();
            this.lbl_Score = new System.Windows.Forms.Label();
            this.timer_act = new System.Windows.Forms.Timer(this.components);
            this.PL = new System.Windows.Forms.PictureBox();
            this.auto_1 = new System.Windows.Forms.PictureBox();
            this.auto_2 = new System.Windows.Forms.PictureBox();
            this.L6 = new System.Windows.Forms.PictureBox();
            this.L5 = new System.Windows.Forms.PictureBox();
            this.L4 = new System.Windows.Forms.PictureBox();
            this.L3 = new System.Windows.Forms.PictureBox();
            this.L2 = new System.Windows.Forms.PictureBox();
            this.L1 = new System.Windows.Forms.PictureBox();
            this.panel_gm.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.PL)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.auto_1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.auto_2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.L6)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.L5)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.L4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.L3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.L2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.L1)).BeginInit();
            this.SuspendLayout();
            // 
            // panel_gm
            // 
            this.panel_gm.BackColor = System.Drawing.Color.DarkBlue;
            this.panel_gm.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.panel_gm.Controls.Add(this.lbl_gm_over);
            this.panel_gm.Controls.Add(this.PL);
            this.panel_gm.Controls.Add(this.auto_1);
            this.panel_gm.Controls.Add(this.auto_2);
            this.panel_gm.Controls.Add(this.L6);
            this.panel_gm.Controls.Add(this.L5);
            this.panel_gm.Controls.Add(this.L4);
            this.panel_gm.Controls.Add(this.L3);
            this.panel_gm.Controls.Add(this.L2);
            this.panel_gm.Controls.Add(this.L1);
            this.panel_gm.ForeColor = System.Drawing.Color.DarkRed;
            this.panel_gm.Location = new System.Drawing.Point(12, 61);
            this.panel_gm.Name = "panel_gm";
            this.panel_gm.Size = new System.Drawing.Size(549, 691);
            this.panel_gm.TabIndex = 0;
            this.panel_gm.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            // 
            // lbl_gm_over
            // 
            this.lbl_gm_over.AutoSize = true;
            this.lbl_gm_over.BackColor = System.Drawing.Color.Pink;
            this.lbl_gm_over.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.lbl_gm_over.Font = new System.Drawing.Font("Wide Latin", 28.2F, System.Drawing.FontStyle.Underline);
            this.lbl_gm_over.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.lbl_gm_over.Location = new System.Drawing.Point(21, 206);
            this.lbl_gm_over.Name = "lbl_gm_over";
            this.lbl_gm_over.Size = new System.Drawing.Size(481, 61);
            this.lbl_gm_over.TabIndex = 11;
            this.lbl_gm_over.Text = "Game Over";
            this.lbl_gm_over.TextAlign = System.Drawing.ContentAlignment.TopCenter;
            this.lbl_gm_over.Visible = false;
            // 
            // lbl_Score
            // 
            this.lbl_Score.AutoSize = true;
            this.lbl_Score.Font = new System.Drawing.Font("Microsoft Sans Serif", 19.8F);
            this.lbl_Score.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.lbl_Score.Location = new System.Drawing.Point(235, 9);
            this.lbl_Score.Name = "lbl_Score";
            this.lbl_Score.Size = new System.Drawing.Size(130, 38);
            this.lbl_Score.TabIndex = 1;
            this.lbl_Score.Text = "Scor : 0";
            this.lbl_Score.Click += new System.EventHandler(this.label1_Click);
            // 
            // timer_act
            // 
            this.timer_act.Enabled = true;
            this.timer_act.Interval = 1;
            this.timer_act.Tick += new System.EventHandler(this.timer_act_Tick);
            // 
            // PL
            // 
            this.PL.BackColor = System.Drawing.Color.Transparent;
            this.PL.Image = global::auto_app.Properties.Resources.car0;
            this.PL.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.PL.Location = new System.Drawing.Point(203, 523);
            this.PL.Name = "PL";
            this.PL.Size = new System.Drawing.Size(46, 99);
            this.PL.SizeMode = System.Windows.Forms.PictureBoxSizeMode.AutoSize;
            this.PL.TabIndex = 6;
            this.PL.TabStop = false;
            this.PL.Click += new System.EventHandler(this.PL_Click);
            // 
            // auto_1
            // 
            this.auto_1.BackColor = System.Drawing.Color.Transparent;
            this.auto_1.Image = global::auto_app.Properties.Resources.car5;
            this.auto_1.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.auto_1.Location = new System.Drawing.Point(67, 32);
            this.auto_1.Name = "auto_1";
            this.auto_1.Size = new System.Drawing.Size(46, 99);
            this.auto_1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.AutoSize;
            this.auto_1.TabIndex = 10;
            this.auto_1.TabStop = false;
            // 
            // auto_2
            // 
            this.auto_2.BackColor = System.Drawing.Color.Transparent;
            this.auto_2.Image = global::auto_app.Properties.Resources.car1;
            this.auto_2.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.auto_2.Location = new System.Drawing.Point(420, 280);
            this.auto_2.Name = "auto_2";
            this.auto_2.Size = new System.Drawing.Size(46, 99);
            this.auto_2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.AutoSize;
            this.auto_2.TabIndex = 9;
            this.auto_2.TabStop = false;
            this.auto_2.Click += new System.EventHandler(this.pictureBox3_Click);
            // 
            // L6
            // 
            this.L6.BackColor = System.Drawing.Color.LavenderBlush;
            this.L6.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.L6.Location = new System.Drawing.Point(410, 383);
            this.L6.Name = "L6";
            this.L6.Size = new System.Drawing.Size(13, 161);
            this.L6.TabIndex = 5;
            this.L6.TabStop = false;
            // 
            // L5
            // 
            this.L5.BackColor = System.Drawing.Color.LavenderBlush;
            this.L5.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.L5.Location = new System.Drawing.Point(410, 42);
            this.L5.Name = "L5";
            this.L5.Size = new System.Drawing.Size(13, 161);
            this.L5.TabIndex = 4;
            this.L5.TabStop = false;
            // 
            // L4
            // 
            this.L4.BackColor = System.Drawing.Color.LavenderBlush;
            this.L4.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.L4.Location = new System.Drawing.Point(266, 383);
            this.L4.Name = "L4";
            this.L4.Size = new System.Drawing.Size(13, 161);
            this.L4.TabIndex = 3;
            this.L4.TabStop = false;
            // 
            // L3
            // 
            this.L3.BackColor = System.Drawing.Color.LavenderBlush;
            this.L3.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.L3.Location = new System.Drawing.Point(266, 42);
            this.L3.Name = "L3";
            this.L3.Size = new System.Drawing.Size(13, 161);
            this.L3.TabIndex = 2;
            this.L3.TabStop = false;
            // 
            // L2
            // 
            this.L2.BackColor = System.Drawing.Color.LavenderBlush;
            this.L2.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.L2.Location = new System.Drawing.Point(118, 383);
            this.L2.Name = "L2";
            this.L2.Size = new System.Drawing.Size(13, 161);
            this.L2.TabIndex = 1;
            this.L2.TabStop = false;
            // 
            // L1
            // 
            this.L1.BackColor = System.Drawing.Color.LavenderBlush;
            this.L1.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.L1.Location = new System.Drawing.Point(118, 42);
            this.L1.Name = "L1";
            this.L1.Size = new System.Drawing.Size(13, 161);
            this.L1.TabIndex = 0;
            this.L1.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.HotTrack;
            this.ClientSize = new System.Drawing.Size(573, 755);
            this.Controls.Add(this.lbl_Score);
            this.Controls.Add(this.panel_gm);
            this.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Form1";
            this.ShowIcon = false;
            this.Text = "Form1";
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyDown);
            this.KeyUp += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyUp);
            this.panel_gm.ResumeLayout(false);
            this.panel_gm.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.PL)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.auto_1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.auto_2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.L6)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.L5)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.L4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.L3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.L2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.L1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel_gm;
        private System.Windows.Forms.PictureBox L2;
        private System.Windows.Forms.PictureBox L1;
        private System.Windows.Forms.Label lbl_Score;
        private System.Windows.Forms.PictureBox L6;
        private System.Windows.Forms.PictureBox L5;
        private System.Windows.Forms.PictureBox L4;
        private System.Windows.Forms.PictureBox L3;
        private System.Windows.Forms.Timer timer_act;
        private System.Windows.Forms.PictureBox PL;
        private System.Windows.Forms.PictureBox auto_1;
        private System.Windows.Forms.PictureBox auto_2;
        private System.Windows.Forms.Label lbl_gm_over;
    }
}

