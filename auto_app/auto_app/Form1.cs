using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace auto_app
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }
        enum Dir { Left , Right , None }



        Random RND = new Random();

        int score = 0;
        int speed = 3;
        Dir dir = Dir.None;
        private void timer_act_Tick(object sender, EventArgs e)
        {
            L1.Top += speed;
            L2.Top += speed;
            L3.Top += speed;
            L4.Top += speed;
            L5.Top += speed;
            L6.Top += speed;


            if (L1.Top > panel_gm.Height) L1.Top = -L1.Height;
            if (L2.Top > panel_gm.Height) L2.Top = -L2.Height;
            if (L3.Top > panel_gm.Height) L3.Top = -L3.Height;
            if (L4.Top > panel_gm.Height) L4.Top = -L4.Height;
            if (L5.Top > panel_gm.Height) L5.Top = -L5.Height;
            if (L6.Top > panel_gm.Height) L6.Top = -L6.Height;

            //<<<<<<<<<<<<<<<<<<<< auto(2) >>>>>>>>>>>>>>>>>>>>
            if (auto_1.Visible)
                auto_1.Top += speed;
            if (auto_1.Top > panel_gm.Height)
            {
                auto_1.Visible = false;
                auto_1.Top = -auto_1.Height;
                auto_1.Left = RND.Next((panel_gm.Width - auto_1.Width) / 2);
                auto_1.Visible = true;

                int car = RND.Next(1, 6);
                if (car == 1) auto_1.Image = Properties.Resources.car1;
                else if (car == 2) auto_1.Image = Properties.Resources.car2;
                else if (car == 3) auto_1.Image = Properties.Resources.car3;
                else if (car == 4) auto_1.Image = Properties.Resources.car4;
                else auto_1.Image = Properties.Resources.car5;

                auto_1.Visible = true;
            }
            //<<<<<<<<<<<<<<<<<<<< auto(2) >>>>>>>>>>>>>>>>>>>>
            if (auto_2.Visible)
                auto_2.Top += speed;
            if (auto_2.Top > panel_gm.Height)
            {
                auto_2.Visible = false;
                auto_2.Top = -auto_2.Height;
                auto_2.Left = RND.Next( panel_gm.Width/2, panel_gm.Width-auto_2.Width );
                int car = RND.Next(1, 6);
                if (car == 1) auto_2.Image = Properties.Resources.car1;
                else if (car == 2) auto_2.Image = Properties.Resources.car2;
                else if (car == 3) auto_2.Image = Properties.Resources.car3;
                else if (car == 4) auto_2.Image = Properties.Resources.car4;
                else auto_2.Image = Properties.Resources.car5;
                

                auto_2.Visible = true;
            }

            if (PL.Bounds.IntersectsWith(auto_1.Bounds) || PL.Bounds.IntersectsWith(auto_2.Bounds))
            {
                timer_act.Enabled = false;
                lbl_gm_over.Visible = true;
               
            }
            score++ ;

            if (score >  500) speed = 4;
            if (score > 1000) speed = 5;
            if (score > 1500) speed = 6;
            if (score > 2000) speed = 7;
            if (score > 2500) speed = 8;




            lbl_Score.Text = "Score : " + score;

            if (dir == Dir.Left && PL.Left>0)
                PL.Left -= speed;
            if (dir == Dir.Right && PL.Left<panel_gm.Width-PL.Width)
                PL.Left += speed;
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyData == Keys.Left)
                dir = Dir.Left;
            else if (e.KeyData == Keys.Right)
                dir = Dir.Right;
            else dir = Dir.None;


            if (lbl_gm_over.Visible)
                if (e.KeyData == Keys.Space)
                {
                    lbl_gm_over.Visible = false;
                    PL.Left = panel_gm.Width / 2;
                    auto_1.Left = 0;
                    auto_2.Left = panel_gm.Width - auto_2.Width;
                    timer_act.Enabled = true;
                    speed = 3;
                    score = 0;
                }

        }

        private void Form1_KeyUp(object sender, KeyEventArgs e)
        {
            dir = Dir.None;
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void PL_Click(object sender, EventArgs e)
        {

        }
    }
}
